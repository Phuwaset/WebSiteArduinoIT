<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arduino</title>
    <link rel="stylesheet" href="style.css">

    <!-- CDN & DaisyUI &  TailwindCSS  -->   
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.4.19/dist/full.min.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <label class="swap swap-rotate">
  
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller" value="synthwave" />
        
        <!-- sun icon -->
        <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
        
        <!-- moon icon -->
        <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        
      </label>
    <!-- buttons -->
<div class="p-4">
    <button class="btn btn-primary">primary</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-accent">accent</button>
  </div>
  
  <!-- same buttons with another theme! -->
  <div class="p-4" data-theme="cupcake">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
  </div>
  
  <!-- tab -->
  <div class="tabs tabs-lifted p-4">
    <button class="tab">Tab 1</button>
    <button class="tab tab-active">Tab 2</button>
    <button class="tab">Tab 3</button>
    <button class="tab"></button>
  </div>
  
  <!-- toggle, checkbox, radio -->
  <div class="p-4">
    <input type="checkbox" class="toggle" />
    <input type="checkbox" class="toggle toggle-primary" />
    <input type="checkbox" class="toggle toggle-secondary" />
    <input type="checkbox" class="toggle toggle-accent" />
    <br/>
    <input type="checkbox" class="checkbox" />
    <input type="checkbox" class="checkbox-primary checkbox" />
    <input type="checkbox" class="checkbox-secondary checkbox" />
    <input type="checkbox" class="checkbox-accent checkbox" />
    <br/>
    <input type="radio" name="radio" class="radio" />
    <input type="radio" name="radio" class="radio-primary radio" />
    <input type="radio" name="radio" class="radio-secondary radio" />
    <input type="radio" name="radio" class="radio-accent radio" />
  </div>
  
  <!-- card -->
  <div class="card m-4 w-80 shadow">
    <figure>
      <img src="https://picsum.photos/id/103/500/250" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">DaisyUI Card</h2>
      <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
    </div>
  </div>
  
  <!-- dropdown -->
  <details class="dropdown m-4">
    <summary class="btn m-1">open/close dropdown</summary>
    <ul class="dropdown-content menu z-[2] w-52 rounded-box bg-base-200 p-2">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </details>
  
  <!-- Open the modal using ID.showModal() method -->
  <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
  <dialog id="my_modal_1" class="modal">
    <form method="dialog" class="modal-box">
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <button class="btn">Close</button>
      </div>
    </form>
  </dialog>
  
  <!-- steps -->
  <ul class="steps my-4 w-full">
    <li class="step step-primary">Register</li>
    <li class="step step-primary">Choose plan</li>
    <li class="step">Purchase</li>
    <li class="step">Receive Product</li>
  </ul>
  
  <!-- chat bubble -->
  <div class="chat chat-start m-4">
    <div class="avatar chat-image">
      <div class="w-10 rounded-full">
        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div class="chat-bubble">see all components <a class="link" target="_blank" href="https://daisyui.com/components">Here</a></div>
  </div>
  
    <script src="https://cdn.tailwindcss.com"></script>
</body>
</html>