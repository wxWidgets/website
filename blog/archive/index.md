---
title: Developer Blog Archive
---

<table class="table table-striped my-4">
  <caption>Full listing of all blog posts, sorted by newest first.</caption>
  <thead><tr><th>Post</th><th>Date</th></tr></thead>
  <tbody>
    {% assign posts = site.blog | sort: 'date' | reverse %}
    {% for post in posts %}
    <tr>
      <td><a href="{{post.url}}">{{ post.title | escape }}</a></td>
      <td><time datetime="{{ post.date | datetime | date_to_xmlschema }}" pubdate{% if updated %} data-updated="true"{% endif %}>{{ post.date | date: "%B %d, %Y" }}</time></td>
    </tr>
    {% endfor %}
  </tbody>
</table>
