import { FunnelQuiz } from '../../components/funnel/FunnelQuiz'

export default function GoQuizPage() {
  return (
    <FunnelQuiz
      seoPath="/go/quiz"
      bookPath="/go/book"
      contentName="go_quiz"
      leadSource="funnel_quiz_nurture"
    />
  )
}
