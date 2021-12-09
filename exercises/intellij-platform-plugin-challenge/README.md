# Snyk Plugin Development Interview

<!-- Plugin description -->
## Goals
We would like to have a functionality to scan for all Kubernetes files in a project. To achieve this
we would need to analyse files and record the file name and associated container images (there can be 0..n) 
in a cache to later access that data. When a file event occurs, (e.g. create, change or delete) we need
to update the cache. And last, we would like to highlight the `image` tag if existent in found Kubernetes
files using an IntelliJ annotator.

## Getting started

Kubernetes files have a `.yaml` or `.yml` file ending and can be identified as a Kubernetes file by their 
`kind` and `apiVersion` YAML elements at the start of the file. 

Look through the source code and the tests - there are already some tests and classes marked with `TODO` to get started.

- `KubernetesImageAnnotator`: this class should highlight the `image` YAML elements
- `SnykBulkFileListener`: this class should react on file events
- `SnykPostStartupActivity`: this class is called after startup and should initialize our cache
- `KubernetesImageCacheService`: this class should contain the recorded image information

Quality is important, so each of these classes have corresponding test classes. 



<!-- Plugin description end -->

## Installation

- Using IDE built-in plugin system:
  
  <kbd>Settings/Preferences</kbd> > <kbd>Plugins</kbd> > <kbd>Marketplace</kbd> > <kbd>Search for "intellij-platform-plugin-challenge"</kbd> >
  <kbd>Install Plugin</kbd>
  
- Manually:

  Download the [latest release](https://github.com/snyk/intellij-platform-plugin-challenge/releases/latest) and install it manually using
  <kbd>Settings/Preferences</kbd> > <kbd>Plugins</kbd> > <kbd>⚙️</kbd> > <kbd>Install plugin from disk...</kbd>


---
Plugin based on the [IntelliJ Platform Plugin Template][template].

[template]: https://github.com/JetBrains/intellij-platform-plugin-template
