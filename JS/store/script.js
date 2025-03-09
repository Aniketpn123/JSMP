let output;
output=document.all;
output=document.all[11];
output=document.all.length;


output=document.documentElement;

output= document.head;
output= document.body;
output= document.body.children;

output=document.doctype;
output=document.domain;
output=document.URL;
output=document.characterSet;
output=document.contentType;

output=document.forms[0];
output=document.forms[0].id;
output=document.forms[0].method;
output=document.forms[0].action;

// document.forms[0].id='new-id';

// output=document.links;
// output=document.links[0];
// output=document.links[0].href;
// output=document.links[0].id='google-link';
// output=document.links[0].className='google-class';
// output=document.links[0].classList;

// output=document.images;
// output=document.images[0];
// output=document.images[0].src;

// const forms=Array.from(docunemnt.forms);
// forms.forEach((form)=>console.log(form));


// console.log(output);



// document.getElementById('app-title');
// document.getElementById('app-title').id;
// document.getElementById('app-title').className;
// document.getElementById('app-title').getAttribute('id');

// setAttribute

// document.getElementById('app-title').title='shopping List'
// document.getElementById('app-title').setAttribute('class','title');


// const title=document.getElementById('app-title');

// console.log(title.textContent);

// title.textContent='Hello';
// title.innerText='Hello';
// title.innerHTML='<strong>Shopping List</strong>';


// title.style.color='red';
// title.style.backgroundColor='red';
// title.style.padding='10px';
// title.style.borderRadius='10px';

// document.querySelector('h1');
// document.querySelector('#app-title');
// document.querySelector('.conatiner');
// document.querySelector('input[type="text]');
// document.querySelector('li:nth-child(2)').innerText;

// const secondItem=document.querySelector('li:nth-child(2)');
// secondItem.innerText="apple juice";

// secondItem.style.color='red';


// const list=document.querySelector('ul');
// console.log(list);
// const firstItem=document.querySelector('li');
// firstItem.style.color="blue";

// let listItems=document.querySelectorAll(".item");
// console.log(listItems[1].innerText);

// listItems[1].style.color='red';

// listItems.forEach((item)=>{
//   item.style.color='red';

//   if(index===1){
// item.remove();
//   }
//   if(index===0){
//     item.innerText=`  Orange Juice
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   }
// })


const listItems2=document.getElementsByClassName('item');

console.log(listItems2[2].innerText);

const listItemsArray=Array.from(listItems2);

listItems2.forEach((item)=>{
  console.log(item.innerText);
  
})
