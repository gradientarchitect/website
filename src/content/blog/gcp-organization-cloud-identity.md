---
title: Setting up my own GCP organization with Cloud Identity
description: A personal Gmail account can't own an organization. Here is how a ten-dollar domain and free Cloud Identity fixed that.
topic: Google Cloud · ACE journey
date: 2026-11-12
draft: true
---

My Google Cloud console has always said *No organization* at the top of the resource tree. That's fine for running labs, but it means no folders, no organization policies and no way to practise the hierarchy the Associate Cloud Engineer exam keeps asking about.

## The four levels

Google Cloud's resource hierarchy has four levels. Policies set at any level are inherited by everything below it, which is the whole point of having folders.

<figure class="diagram" aria-label="Resource hierarchy: organization, folders, projects, resources">
  <div class="box focus">Organization · gradientarchitect.com</div>
  <div class="line"></div>
  <div class="row">
    <div class="box">Folder · Sandbox</div>
    <div class="box">Folder · Demo</div>
    <div class="box">Folder · Prod</div>
  </div>
  <div class="line"></div>
  <div class="box">Project · quote-approval-agent</div>
  <div class="line"></div>
  <div class="box">Resources · Cloud Run, buckets, BigQuery</div>
  <figcaption>fig. 1 · Policies flow down: set once on a folder, inherited by every project in it.</figcaption>
</figure>

## Create the folders

Once the organization node appears, grant yourself Folder Admin (Organization Administrator alone can't create folders), then create one folder per environment:

```bash
# find the organization ID
gcloud organizations list

# one folder per environment
gcloud resource-manager folders create \
  --display-name="Sandbox" --organization=$ORG_ID
```

> **Exam note.** A project belongs to exactly one parent, and its project ID can never change. The project name can.

Next time: moving my old lab projects out of *No organization* and into the Sandbox folder, and what the move does to their billing.
