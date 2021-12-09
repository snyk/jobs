package snyk.io.plugin.challenge.services

import com.intellij.testFramework.fixtures.BasePlatformTestCase

class KubernetesImageCacheServiceTest : BasePlatformTestCase() {

    fun `test scanProject should analyse all projects for Kubernetes files and their images`() {
        // TODO check that all files are found and in the cache
        fail("Not implemented")
    }

    fun `test extractFromFile should process a given file and add all found images to the cache`() {
        // TODO check that cache can process a file given and extracted images are available in cache
        fail("Not yet implemented")
    }
}