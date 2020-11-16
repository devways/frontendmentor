import QuestionAnswer from './QuestionAnswer';

import style from './style.module.css';

const data = [
  { question: 'How many team members can I invite?', answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.' },
  { question: 'What is the maximum file upload size?', answer: 'No more than 2GB. All files in your account must fit your allotted storage space.' },
  { question: 'How do I reset my password?', answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.' },
  { question: 'Can I cancel my subscription?', answer: 'Yes! Send us a message and we’ll process your request no questions asked.' },
  { question: 'Do you provide additional support?', answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.' },

]; 

const FaqAccordionCardComponent = () => (
  <div className={style.container}>
    <div className={style.center}>
      <div className={style.svg_container}>
        aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa 
        aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa 
        aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa 
        aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa 
        aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa 
        aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa
      </div>
      <div className={style.faq_container}>
        <div className={style.faq_subcontainer}>
          <h2>FAQ</h2>
          {
            data.map(({ question, answer }) => (
              <QuestionAnswer key={question} question={question} answer={answer} />
            ))
          }
        </div>
      </div>
    </div>
  </div>
);

export default FaqAccordionCardComponent;