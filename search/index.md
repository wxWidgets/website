---
title: "Search"
scripts: search.js
---

<div class="row my-4 justify-content-center">
  <div class="col-md-7">
    <p class="text-center">Search this website, docs, forums, wiki, and issue tracker:</p>
    <form class="form-search" role="search" action="/search/">
      <div class="input-group input-group-lg">
        <input type="text" class="form-control wxsearchbox" name="q">
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit">Search</button>
        </div>
      </div>
    </form>
  </div>
</div>

<div id="wxsearchresults" class="gcse-searchresults-only" data-enableHistory="true"></div>
