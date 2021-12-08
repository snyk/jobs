package snyk.io.plugin.challenge.listeners

import com.intellij.openapi.components.service
import com.intellij.openapi.project.Project
import com.intellij.openapi.project.ProjectManagerListener
import snyk.io.plugin.challenge.services.KubernetesImageCacheService

internal class SnykProjectManagerListener : ProjectManagerListener {

    override fun projectOpened(project: Project) {
        project.service<KubernetesImageCacheService>()
    }
}
