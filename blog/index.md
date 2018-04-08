---
title: Developer Blog
---

{% assign posts = site.blog | sort: 'date' | reverse %}
{% for post in posts limit:3 %}
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>

  <p class="text-muted">
    Posted on <time datetime="{{ post.date | datetime | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
    {% if post.author %}by {{ post.author }}{% endif %}
  </p>

  {{ post.content }}

  {% if post.comments and site.disqus_shortname %}
  <p><a href="{{ post.url }}#disqus_thread" data-disqus-identifier="{{ post.id | escape }}">Comments</a></p>
  {% endif %}
{% endfor %}

<p class="text-center" style="margin-top: 2em;">
  <a class="btn btn-lg btn-outline-primary" href="/blog/archive/"><i class="fas fa-pencil-alt fa-fw"></i> Blog Archive</a>
</p>
