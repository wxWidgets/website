---
title: "Grid selection"
date: 2020-04-15
tags:
- grid
- api
comments: true
---

If you've ever used `wxGrid`, you probably must have had some questions
about the handling of the selection in its API. The class provides several
methods, such as `GetSelectedCells()`, `GetSelected{Rows,Cols}` and
`GetSelectionBlock{TopLeft,BottomRight}()` and it's not always clear when
each of them should be used and what do they return and, especially, what
they don't return.

The bad news is that now there is one more method, `GetSelectedBlocks()`.
But the good news is that the new method replaces all of the previous ones,
can be called in any grid selection mode and always returns all the
selected cells, whether they're selected individually or as parts of rows,
columns or blocks. And, as an extra bonus, this method is also more
convenient to use from C++11 code as it returns an object that can be
iterated over range-based for loops:
```cpp
    for ( const auto block: grid->GetSelectedBlocks() ) {
        // Handle the block, e.g. check if it touches the given area.
        if ( block.Intersects(myBlock) ) {
            ...
            break;
        }
    }
```

The type of `block` in the loop above is [wxGridBlockCoords][1], which is a
very simple class containing 4 integers describing the block top-left and
bottom-right corners. It provides a couple of useful operations such as
`Intersects()` shown above or `Contains()`, but mostly you would just use
its simple accessors to get the cells covered by this block, e.g.
```cpp
        if ( block.GetLeftCol() == 0 &&
                block.GetRightCol() == grid->GetNumberCols() - 1 ) {
            // This block contains rows from block.GetTopRow() to
            // block.GetBottomRow() inclusive -- possibly just one of them.
        }
```

[1]: https://docs.wxwidgets.org/trunk/classwx_grid_block_coords.html

Note that you can still use `wxGrid::IsInSelection()` to just check if the
given cell is selected, but for any other use of the selection, and in
particularly if you need to operate on the entire rows or columns, you
use `wxGrid::GetSelectedBlocks()` from now on -- i.e. starting with
wxWidgets 3.1.4.

Finally, as part of the work on improving grid selection handling, its
user-visible behaviour has also been completely overhauled and enhanced in
too many ways to list here but, to summarize, the various combinations
involving Shift, Ctrl and cursor arrow or space keys now work as expected
in all grid selection modes and so does clicking on row or column headers
and even using both of them together, whereas previously this could result
in quite interesting, to put it mildly, and rather unpredictable, selection
changes.
