import type { Question, AnswerOption } from '@/types/test'
import { FREQUENCY4_OPTIONS, LIKERT5_OPTIONS, LIKERT4_OPTIONS } from '@/lib/scoring'

interface QuestionCardProps {
  question: Question
  selectedValue: number | null
  selectedKey?: string
  isDefault?: boolean
  onAnswer: (value: number, key?: string) => void
}

function getOptions(question: Question): AnswerOption[] {
  if (question.options) return question.options
  if (question.type === 'frequency4') return FREQUENCY4_OPTIONS
  if (question.type === 'likert5') return LIKERT5_OPTIONS
  if (question.type === 'likert4') return LIKERT4_OPTIONS
  return LIKERT5_OPTIONS
}

export default function QuestionCard({ question, selectedValue, selectedKey, isDefault, onAnswer }: QuestionCardProps) {
  const options = getOptions(question)

  return (
    <div className="w-full">
      <p
        className="text-ink font-normal mb-8"
        style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.374px' }}
      >
        {question.text}
      </p>
      <div className="flex flex-col gap-2.5">
        {options.map((option) => {
          const isSelected = (selectedValue === null && selectedKey === undefined)
            ? false
            : question.type === 'mcq'
            ? (option.key !== undefined ? selectedKey === option.key : selectedValue === option.value)
            : selectedValue === option.value

          return (
            <button
              key={`${option.label}-${option.value}`}
              onClick={() => onAnswer(option.value, option.key)}
              className={`w-full text-left px-5 py-3.5 rounded-pill border text-[14px] transition-all active:scale-95 ${
                isSelected && !isDefault
                  ? 'bg-primary border-primary text-white'
                  : isSelected && isDefault
                  ? 'bg-primary/20 border-primary/40 text-primary'
                  : 'bg-canvas border-hairline text-ink hover:border-primary hover:text-primary'
              }`}
              style={{ letterSpacing: '-0.224px', lineHeight: '1.43' }}
            >
              {option.label}
              {isSelected && isDefault && (
                <span className="ml-2 text-[11px] text-primary/70">(기본값)</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
