import { FunnelQuiz } from '../../components/funnel/FunnelQuiz'
import { funnelCopy } from '../../content/funnel'

export default function GoMuslimQuizPage() {
  return (
    <FunnelQuiz
      seoPath="/go/muslim/quiz"
      bookPath="/go/muslim/book"
      contentName="go_muslim_quiz"
      quizIntro={funnelCopy.muslim.quiz}
      leadSource="funnel_muslim_quiz_nurture"
    />
  )
}
