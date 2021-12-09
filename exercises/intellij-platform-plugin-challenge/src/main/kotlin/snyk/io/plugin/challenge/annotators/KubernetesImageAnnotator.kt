package snyk.io.plugin.challenge.annotators

import com.intellij.lang.annotation.AnnotationHolder
import com.intellij.lang.annotation.Annotator
import com.intellij.psi.PsiElement

/**
 * This annotator can highlight images in Kubernetes Files
 */
class KubernetesImageAnnotator : Annotator {
    /**
     * see https://plugins.jetbrains.com/docs/intellij/annotator.html#define-an-annotator
     * PsiFile.findElementAt() could maybe help
     */
    override fun annotate(element: PsiElement, holder: AnnotationHolder) {
//        holder.newSilentAnnotation(HighlightSeverity.INFORMATION)
//            .range(textRange())
//            .create()
//        holder.newAnnotation(HighlightSeverity.INFORMATION, "This is an annotation with a message")
//            .range(textRange())
//            .create()
        TODO("Not yet implemented")
    }

//    private fun textRange(): TextRange = TextRange(0, 1)
}