const questions = [{
  'que' : 'Which of the following is not OOPS concept in Java?',
  'a':'Inheritance',
  'b':'Encapsulation',
  'c':'Polymorphism',
  'd':'Compilation',
  'correct': 'd'
},
{
  'que' : 'Which of the following is a type of polymorphism in Java?',
  'a':'Compile time polymorphism',
  'b':'Execution time polymorphism',
  'c':'Multiple polymorphism',
  'd':'Multilevel polymorphism',
  'correct': 'a'
},
{
  'que' : 'When does method overloading is determined?',
  'a':'At run time',
  'b':'At compile time',
  'c':'At coding time',
  'd':'At execution time',
  'correct': 'b'
},
{
  'que' : 'Which concept of Java is a way of converting real world objects in terms of class?',
  'a':'Polymorphism',
  'b':'Encapsulation',
  'c':'Abstraction',
  'd':'Inheritance',
  'correct': 'c'
},
{
  'que' : 'Which concept of Java is achieved by combining methods and attribute into a class?',
  'a':'Encapsulation',
  'b':'Inheritance',
  'c':'Abstraction',
  'd':'Polymorphism',
  'correct': 'a'
}

]

let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion=()=>{
  if(index==total){
    return endQuiz()
  }
  reset()
  const data=questions[index]
  quesBox.innerText=`${index+1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText=data.a;
  optionInputs[1].nextElementSibling.innerText=data.b;
  optionInputs[2].nextElementSibling.innerText=data.c;
  optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitAns=()=>{
  const data=questions[index];
  const ans = getAns()
  if(ans==data.correct){
    right++;
  }else{
    wrong++;
  }
  index++;
  loadQuestion();
  return;
}
const getAns=()=>{
  let answer;
  optionInputs.forEach(
    (input)=>{
      if(input.checked){
        answer= input.value;
      }
    }
  )
  return answer;
}
const reset=()=>{
  optionInputs.forEach(
    (input)=>{
      input.checked=false;
    }
  )
}
const endQuiz=()=>{
  document.getElementById("box").innerHTML=`
  <div style="text-align:center">
    <h3>Thank You For Playing Quiz</h3>
    <h2> ${right} / ${total} are Correct </h2>
  </div>
  `
}
loadQuestion();