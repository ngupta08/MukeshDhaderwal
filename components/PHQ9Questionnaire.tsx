'use client'

import { useState } from 'react'
import { Button } from './ui'
import { AlertCircle, CheckCircle, FileText } from 'lucide-react'

interface Question {
  id: number
  text: string
}

const questions: Question[] = [
  { id: 1, text: 'Little interest or pleasure in doing things' },
  { id: 2, text: 'Feeling down, depressed, or hopeless' },
  { id: 3, text: 'Trouble falling or staying asleep, or sleeping too much' },
  { id: 4, text: 'Feeling tired or having little energy' },
  { id: 5, text: 'Poor appetite or overeating' },
  { id: 6, text: 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down' },
  { id: 7, text: 'Trouble concentrating on things, such as reading the newspaper or watching television' },
  { id: 8, text: 'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual' },
  { id: 9, text: 'Thoughts that you would be better off dead or of hurting yourself in some way' },
]

const frequencyOptions = [
  { label: 'Not at all', value: 0 },
  { label: 'Several days', value: 1 },
  { label: 'More than half the days', value: 2 },
  { label: 'Nearly every day', value: 3 },
]

const difficultyOptions = [
  { label: 'Not difficult at all', value: 0 },
  { label: 'Somewhat difficult', value: 1 },
  { label: 'Very difficult', value: 2 },
  { label: 'Extremely difficult', value: 3 },
]

interface Results {
  totalScore: number
  severity: string
  recommendation: string
  functionalImpairment: number
  hasSuicidality: boolean
  actionRequired: string
}

function calculateResults(answers: number[], functionalDifficulty: number): Results {
  const totalScore = answers.reduce((sum, score) => sum + score, 0)
  
  // Check for suicidality (Item 9 - index 8): Any response > 0 indicates suicidal thoughts
  const hasSuicidality = answers[8] > 0
  
  let severity: string
  let recommendation: string
  let actionRequired: string
  
  if (totalScore === 0) {
    severity = 'None'
    recommendation = 'No depression symptoms detected. Continue maintaining your mental wellness through healthy lifestyle habits.'
    actionRequired = 'No immediate action needed. Continue monitoring your mental health.'
  } else if (totalScore >= 1 && totalScore <= 4) {
    severity = 'Minimal'
    recommendation = 'Minimal depression symptoms detected. May not need treatment at this time, but monitoring is recommended.'
    actionRequired = 'Monitor your symptoms. Consider self-care strategies and track your mood over time. If symptoms persist or worsen, consult a healthcare provider.'
  } else if (totalScore >= 5 && totalScore <= 9) {
    severity = 'Mild'
    recommendation = 'Mild depression symptoms present. Clinical judgment is needed to determine if watchful waiting or initial intervention is appropriate.'
    actionRequired = 'Consider consulting with a healthcare provider or mental health professional for evaluation. They can help determine if treatment is needed or if watchful waiting is appropriate.'
  } else if (totalScore >= 10 && totalScore <= 14) {
    severity = 'Moderate'
    recommendation = 'Moderate depression symptoms warrant active treatment. Treatment options may include counseling, medication, or both.'
    actionRequired = 'Active treatment is recommended. Please schedule an appointment with a mental health professional or healthcare provider for evaluation and treatment planning.'
  } else if (totalScore >= 15 && totalScore <= 19) {
    severity = 'Moderately Severe'
    recommendation = 'Moderately severe depression symptoms require active treatment. Psychotherapy, medication, or a combination approach is strongly recommended.'
    actionRequired = 'Active treatment with psychotherapy, medication, or combination therapy is recommended. Please schedule an appointment with a mental health professional as soon as possible.'
  } else {
    severity = 'Severe'
    recommendation = 'Severe depression symptoms require immediate, aggressive treatment. Medication and/or psychotherapy, plus urgent mental health referral may be needed.'
    actionRequired = 'Immediate professional help is strongly recommended. Please contact a mental health professional or healthcare provider urgently for comprehensive evaluation and treatment.'
  }
  
  // Override action for suicidality
  if (hasSuicidality) {
    actionRequired = '⚠️ URGENT: You indicated thoughts of self-harm or suicide. This requires immediate, competent follow-up for suicide risk assessment. Please contact a mental health professional, crisis helpline, or emergency services immediately. If you are in immediate danger, call emergency services (108/112) or a suicide prevention helpline.'
  }
  
  return {
    totalScore,
    severity,
    recommendation,
    functionalImpairment: functionalDifficulty,
    hasSuicidality,
    actionRequired,
  }
}

export default function PHQ9Questionnaire() {
  const [answers, setAnswers] = useState<number[]>(Array(9).fill(-1))
  const [functionalDifficulty, setFunctionalDifficulty] = useState<number>(-1)
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<Results | null>(null)

  const handleAnswerChange = (questionIndex: number, value: number) => {
    const newAnswers = [...answers]
    newAnswers[questionIndex] = value
    setAnswers(newAnswers)
  }

  const handleSubmit = () => {
    if (answers.some(answer => answer === -1)) {
      alert('Please answer all questions before submitting.')
      return
    }
    
    const calculatedResults = calculateResults(answers, functionalDifficulty)
    setResults(calculatedResults)
    setShowResults(true)
  }

  const handleReset = () => {
    setAnswers(Array(9).fill(-1))
    setFunctionalDifficulty(-1)
    setShowResults(false)
    setResults(null)
  }

  if (showResults && results) {
    return (
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-teal-600 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Assessment Complete</h2>
            <p className="text-sm sm:text-base text-gray-600 px-2">Thank you for completing the PHQ-9 questionnaire</p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 sm:p-6 border border-teal-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Score</p>
                <p className="text-3xl sm:text-4xl font-bold text-teal-600">{results.totalScore} / 27</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Severity Level</p>
                <p className="text-xl sm:text-2xl font-semibold text-gray-900">{results.severity}</p>
              </div>
            </div>
          </div>

          {/* Suicidality Warning - Show First if Present */}
          {results.hasSuicidality && (
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 sm:p-6">
              <div className="flex items-start gap-2 sm:gap-3">
                <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-red-900 mb-2">⚠️ Immediate Attention Required</h3>
                  <p className="text-sm sm:text-base text-red-800 leading-relaxed font-medium mb-2">
                    You indicated thoughts of self-harm or suicide (Question 9). This requires immediate, competent follow-up for suicide risk assessment.
                  </p>
                  <p className="text-sm sm:text-base text-red-900 leading-relaxed font-semibold">
                    Please contact a mental health professional, crisis helpline, or emergency services immediately. If you are in immediate danger, call emergency services (108/112) or a suicide prevention helpline.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 ${results.hasSuicidality ? 'border-blue-300' : ''}`}>
            <div className="flex items-start gap-2 sm:gap-3">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-blue-900 mb-2">Clinical Interpretation</h3>
                <p className="text-xs sm:text-sm md:text-base text-blue-800 leading-relaxed mb-3">{results.recommendation}</p>
                <div className="mt-3 pt-3 border-t border-blue-200">
                  <h4 className="text-xs sm:text-sm font-semibold text-blue-900 mb-1.5">Action Required:</h4>
                  <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">{results.actionRequired}</p>
                </div>
              </div>
            </div>
          </div>

          {results.functionalImpairment >= 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Functional Impairment</h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-2">
                {difficultyOptions[results.functionalImpairment]?.label || 'Not specified'}
              </p>
              <p className="text-xs text-gray-600 italic">
                This assessment helps determine how much your symptoms interfere with daily life, which influences treatment decisions.
              </p>
            </div>
          )}

          {/* Key Clinical Considerations */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-sm sm:text-base font-semibold text-amber-900 mb-2">Important Clinical Considerations</h3>
            <ul className="text-xs sm:text-sm text-amber-800 space-y-1.5 list-disc list-inside">
              <li><strong>Clinical Judgment:</strong> PHQ-9 scores guide but don't replace a full clinical assessment. A healthcare provider will evaluate symptom duration, functional impact, and rule out other conditions (like bereavement or bipolar disorder).</li>
              <li><strong>Comprehensive Evaluation:</strong> This self-assessment is a screening tool. A complete evaluation by a mental health professional is needed for accurate diagnosis and treatment planning.</li>
              {results.functionalImpairment >= 0 && (
                <li><strong>Functionality Impact:</strong> Your reported functional impairment level is an important factor in determining the most appropriate treatment approach.</li>
              )}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://wa.me/919509046236?text=Hello, I completed the PHQ-9 self-assessment and would like to discuss my results with Dr. Mukesh Chand Daderwal."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="primary" className="w-full text-sm sm:text-base py-2.5 sm:py-3">
                Consult with Doctor
              </Button>
            </a>
            <Button variant="outline" onClick={handleReset} className="flex-1 text-sm sm:text-base py-2.5 sm:py-3">
              Take Assessment Again
            </Button>
          </div>

          <div className="text-[10px] sm:text-xs text-gray-500 text-center pt-3 sm:pt-4 border-t border-gray-200 px-2">
            <p>
              <strong>Disclaimer:</strong> This self-assessment tool is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. 
              Please consult with a qualified healthcare provider for any mental health concerns.
            </p>
            <p className="mt-2">
              Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational grant from Pfizer Inc.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 sm:mb-4">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-xs sm:text-sm font-semibold">
              Patient Health Questionnaire
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            PHQ-9 Self-Assessment
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Over the last 2 weeks, how often have you been bothered by any of the following problems?
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200"
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 leading-snug">
                {question.id}. {question.text}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                {frequencyOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-2.5 sm:p-3 rounded-lg border-2 cursor-pointer transition-all touch-manipulation ${
                      answers[index] === option.value
                        ? 'border-teal-600 bg-teal-50 text-teal-900'
                        : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50 active:bg-teal-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.value}
                      checked={answers[index] === option.value}
                      onChange={() => handleAnswerChange(index, option.value)}
                      className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 text-teal-600 focus:ring-teal-500 flex-shrink-0"
                    />
                    <span className="text-xs sm:text-sm font-medium leading-tight">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Functional Impairment Question */}
        <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border border-blue-200 mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 leading-snug">
            If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {difficultyOptions.map((option) => (
              <label
                key={option.value}
                className={`flex items-center p-2.5 sm:p-3 rounded-lg border-2 cursor-pointer transition-all touch-manipulation ${
                  functionalDifficulty === option.value
                    ? 'border-blue-600 bg-blue-100 text-blue-900'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 active:bg-blue-50'
                }`}
              >
                <input
                  type="radio"
                  name="functional-difficulty"
                  value={option.value}
                  checked={functionalDifficulty === option.value}
                  onChange={() => setFunctionalDifficulty(option.value)}
                  className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 text-blue-600 focus:ring-blue-500 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm font-medium leading-tight">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg"
            disabled={answers.some(answer => answer === -1)}
          >
            Submit Assessment
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="text-[10px] sm:text-xs text-gray-500 text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 px-2">
          <p>
            <strong>Note:</strong> This assessment is a screening tool and does not provide a diagnosis. 
            Please consult with a healthcare professional for proper evaluation and treatment.
          </p>
        </div>
      </div>
    </div>
  )
}
