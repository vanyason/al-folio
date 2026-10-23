---
layout: page
permalink: /publications/
title: Publications
description: Selected publications, grouped as in the CV.
nav: true
nav_order: 3
toc:
  sidebar: left
---

{% include bib_search.liquid %}

<a class="anchor" id="books-english"></a>

<div class="card mt-3 p-3">
  <h2 class="card-title font-weight-medium">Books and monographs — in English</h2>
  <div class="publications">
    {% bibliography -q @*[category=books-en] %}
  </div>
</div>

<a class="anchor" id="books-russian"></a>

<div class="card mt-3 p-3">
  <h2 class="card-title font-weight-medium">Books and monographs — in Russian</h2>
  <div class="publications">
    {% bibliography -q @*[category=books-ru] %}
  </div>
</div>

<a class="anchor" id="articles-chapters"></a>

<div class="card mt-3 p-3">
  <h2 class="card-title font-weight-medium">Recent articles and book chapters in English</h2>
  <div class="publications">
    {% bibliography -q @*[category=articles] %}
  </div>
</div>

<a class="anchor" id="edited-volumes"></a>

<div class="card mt-3 p-3">
  <h2 class="card-title font-weight-medium">Select edited volumes (in Russian)</h2>
  <div class="publications">
    {% bibliography -q @*[category=edited-volumes] %}
  </div>
</div>

<a class="anchor" id="translations"></a>

<div class="card mt-3 p-3">
  <h2 class="card-title font-weight-medium">Translation projects</h2>
  <div class="publications">
    {% bibliography -q @*[category=translations] %}
  </div>
</div>

<div class="mt-4">
  <p>
    For a fuller record of publications, see:<br>
    <a
      href="{{ '/assets/pdf/Ivan_Kurilla_complete_publications_reformatted.pdf' | relative_url | bust_file_cache }}"
      >Complete list of publications (PDF)</a
    >
  </p>
</div>
