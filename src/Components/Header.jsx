import logoImg from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Quiz logo" />
      <h1>Do You Speak Fluent JavaScript?</h1>
    </header>
  );
}