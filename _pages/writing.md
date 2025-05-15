---
layout: page
title: Writing
permalink: /writing/
nav: true
nav_order: 5
---

Here you can find a collection of my non-primary research writing. 


<ul>
{% for item in site.data.writing_pieces %}
  <li>
    <h3><a href="{{ item.pdf_url | relative_url }}" target="_blank">{{ item.title }}</a></h3>
    {% if item.description %}
      <p>{{ item.description }}</p>
    {% endif %}
  </li>
{% endfor %}
</ul>
