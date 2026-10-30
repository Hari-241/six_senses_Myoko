import { Reveal, RevealGroup, RevealItem } from '../components/motion/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Pill } from '../components/ui/Pill';
import { FermentationTag } from '../components/ui/FermentationTag';
import { usePlanner } from '../context/PlannerContext';
import { surveyQuestions, diningStyleQuestion } from '../data/survey';
import './03_DesignYourStay.css';

export function DesignYourStay() {
  const { state, setSurveyField } = usePlanner();

  return (
    <section className="design-stay section section--greige" id="design-stay">
      <div className="container">
        <SectionHeading
          eyebrow="Build Your Plan"
          heading="Design your stay"
          body="Answer a few quick questions and we'll shape a daily plan you can still edit by hand."
          measure={false}
        />

        <RevealGroup as="div" className="design-stay__grid" stagger={0.08}>
          {surveyQuestions.map((question) => {
            const selectedOption = question.options?.find((o) => o.id === state.survey[question.field]);
            return (
            <RevealItem as="div" className="survey-card" key={question.id}>
              <p className="survey-card__label">{question.label}</p>

              {question.type === 'chips' ? (
                <>
                  <div className="survey-card__chips">
                    {question.options.map((option) => {
                      const selected = state.survey[question.field] === option.id;
                      return (
                        <Pill
                          key={option.id}
                          variant={selected ? 'tan' : 'outline'}
                          size="sm"
                          onClick={() => setSurveyField(question.field, option.id)}
                          aria-pressed={selected}
                        >
                          {option.label}
                        </Pill>
                      );
                    })}
                  </div>

                  {selectedOption?.allowCustom ? (
                    <input
                      type="text"
                      inputMode="numeric"
                      className="survey-card__custom-input"
                      placeholder="How many nights?"
                      value={state.survey[`${question.field}Custom`] ?? ''}
                      onChange={(e) => setSurveyField(`${question.field}Custom`, e.target.value)}
                    />
                  ) : null}
                </>
              ) : (
                <textarea
                  className="survey-card__textarea"
                  placeholder={question.placeholder}
                  value={state.survey[question.field]}
                  onChange={(e) => setSurveyField(question.field, e.target.value)}
                  rows={3}
                />
              )}
            </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal as="div" delay={0.1} className="dining-style">
          <p className="dining-style__label">{diningStyleQuestion.label}</p>
          <div className="dining-style__options">
            {diningStyleQuestion.options.map((option) => {
              const selected = state.survey.diningStyle === option.id;
              return (
                <button
                  type="button"
                  key={option.id}
                  className={`dining-style__card ${selected ? 'dining-style__card--selected' : ''}`}
                  onClick={() => setSurveyField('diningStyle', option.id)}
                  aria-pressed={selected}
                >
                  <div className="dining-style__card-top">
                    <h4>{option.label}</h4>
                    <div className="dining-style__card-tags">
                      {option.suggested ? <span className="suggested-tag">Suggested</span> : null}
                      {option.id === 'fermentationMenu' ? <FermentationTag /> : null}
                    </div>
                  </div>
                  <p>{option.description}</p>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
