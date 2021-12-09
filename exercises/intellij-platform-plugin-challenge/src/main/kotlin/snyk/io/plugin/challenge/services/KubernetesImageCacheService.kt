package snyk.io.plugin.challenge.services

import com.intellij.openapi.components.Service
import com.intellij.openapi.project.Project

/**
The Kubernetes Image Cache should do the following:
- Have a function to scan for all Kubernetes file in the project
- Kubernetes files have a yaml or yml file ending
- A yaml file can be identified as a Kubernetes file by their `kind` and `apiVersion` yaml keys at the start of the file
- Analyse files and record the file name and associated container images (there can be 0..n) in a cache
- Be able to analyse a file and update the cache when given a file event (e.g. create, change or delete)
 */
@Service
class KubernetesImageCacheService(project: Project) {
  // TODO implement me!
}
