package snyk.io.plugin.challenge

import com.intellij.ide.impl.ProjectUtil
import com.intellij.openapi.vfs.newvfs.BulkFileListener
import com.intellij.openapi.vfs.newvfs.events.VFileEvent

class SnykBulkFileListener : BulkFileListener {
    override fun before(events: MutableList<out VFileEvent>) {
        super.before(events)
    }

    override fun after(events: MutableList<out VFileEvent>) {
        for (project in ProjectUtil.getOpenProjects()) {
            // TODO hookup with our functionality
        }
    }
}
