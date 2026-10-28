const PRODUCTS=[
{id:'b1',img:'images/b1.jpg',cat:'breakfast',name:'Masala Omelette Wrap',price:350,icon:'🌯',desc:'Fluffy two-egg omelette with green chilli, onion and coriander in a warm paratha wrap.',tags:['Hot'],cal:420,prot:'18g',time:'8 min',opts:{Extra:['Cheese +60','Hash brown +80']}},
{id:'b2',img:'images/b2.jpg',cat:'breakfast',name:'Classic Halwa Puri',price:300,icon:'🥘',desc:'Two crisp puris with suji halwa and spiced chana. The campus Sunday favourite, every day.',tags:['Desi','V'],cal:610,prot:'12g',time:'6 min',opts:{}},
{id:'b3',img:'images/b3.jpg',cat:'breakfast',name:'Berry Oat Bowl',price:420,icon:'🥣',desc:'Overnight oats with mixed berries, honey and toasted almonds.',tags:['V','Light'],cal:340,prot:'11g',time:'3 min',opts:{Milk:['Dairy','Oat +40']}},
{id:'b4',img:'images/b4.jpg',cat:'breakfast',name:'Pancake Stack',price:480,icon:'🥞',desc:'Three fluffy pancakes, maple syrup and a pat of butter.',tags:['V','Sweet'],cal:560,prot:'9g',time:'10 min',opts:{Topping:['Maple','Nutella +70','Banana +50']}},

{id:'l1',img:'images/l1.jpg',cat:'lunch',name:'Chicken Biryani',price:450,icon:'🍛',desc:'Slow-cooked basmati with tender chicken, raita and salad.',tags:['Desi','Hot'],cal:720,prot:'32g',time:'10 min',opts:{Size:['Regular','Large +120']}},

{id:'l3',img:'images/l3.jpg',cat:'lunch',name:'Chicken Karahi Plate',price:650,icon:'🍲',desc:'Tomato-ginger chicken karahi with two fresh naan.',tags:['Desi','Hot'],cal:780,prot:'38g',time:'15 min',opts:{Naan:['Plain','Garlic +30']}},
{id:'l4',img:'images/l4.jpg',cat:'lunch',name:'Penne Alfredo',price:580,icon:'🍝',desc:'Creamy white-sauce pasta with mushrooms and herbs.',tags:['V'],cal:640,prot:'17g',time:'12 min',opts:{Add:['None','Grilled chicken +120']}},
{id:'l5',img:'images/l5.jpg',cat:'lunch',name:'Club Sandwich',price:480,icon:'🥪',desc:'Triple-decker with chicken, egg, cheese and fries.',tags:[],cal:690,prot:'29g',time:'9 min',opts:{}},
{id:'l6',img:'images/l6.jpg',cat:'lunch',name:'Sushi Roll Box',price:750,icon:'🍣',desc:'Eight pieces: California and spicy tuna rolls with soy and wasabi.',tags:['Light'],cal:410,prot:'20g',time:'8 min',opts:{}},
{id:'f1',img:'images/f1.jpg',cat:'fastfood',name:'Zinger Burger',price:420,icon:'🍔',desc:'Crispy fried chicken fillet, lettuce and house mayo in a toasted bun.',tags:['Hot'],cal:640,prot:'28g',time:'8 min',opts:{Combo:['Burger only','Fries + drink +220']}},
{id:'f2',img:'images/f2.jpg',cat:'fastfood',name:'Fries',price:320,icon:'🍟',desc:'Crinkle fries with cheese sauce, jalapeños and crispy chicken bits.',tags:['Hot'],cal:580,prot:'14g',time:'7 min',opts:{}},
{id:'f3',img:'images/f3.jpg',cat:'fastfood',name:'Pepperoni Pizza (8")',price:650,icon:'🍕',desc:'Stone-baked, mozzarella-heavy, with spicy pepperoni.',tags:[],cal:820,prot:'30g',time:'15 min',opts:{Crust:['Classic','Cheese stuffed +100']}},

{id:'f6',img:'images/f6.jpg',cat:'fastfood',name:'Iced Latte',price:360,icon:'🧋',desc:'Double espresso over milk and ice. Study fuel.',tags:['V','Cold'],cal:150,prot:'7g',time:'3 min',opts:{Flavour:['Plain','Caramel +40','Hazelnut +40']}},
{id:'f7',img:'images/f7.jpg',cat:'fastfood',name:'Chocolate Donut',price:180,icon:'🍩',desc:'Glazed ring donut with chocolate drizzle.',tags:['V','Sweet'],cal:320,prot:'4g',time:'2 min',opts:{}},
{id:'s1',img:'images/s1.jpg',cat:'stationery',name:'A5 Ruled Notebook',price:250,icon:'📓',desc:'160 pages, lay-flat binding, purple cover.',tags:['Study'],cal:0,prot:'-',time:'Ready',opts:{Cover:['Purple','Teal']}},
{id:'s2',img:'images/s2.jpg',cat:'stationery',name:'Gel Pen Pack (5)',price:200,icon:'🖊️',desc:'Smooth 0.5mm gel pens in assorted colours.',tags:['Study'],opts:{}},
{id:'s3',img:'images/s3.jpg',cat:'stationery',name:'Highlighter Set',price:260,icon:'🖍️',desc:'Six pastel highlighters that don\'t bleed through.',tags:['Study'],opts:{}},
{id:'s4',img:'images/s4.jpg',cat:'stationery',name:'Scientific Calculator',price:1800,icon:'🧮',desc:'240-function exam-approved calculator.',tags:['Exam'],opts:{}},
{id:'s5',img:'images/s5.jpg',cat:'stationery',name:'Sticky Notes Cube',price:150,icon:'📝',desc:'400 neon-pastel sticky notes.',tags:['Study'],opts:{}},
];
const KW={'b1': 'omelette,wrap', 'b2': 'indian,breakfast', 'b3': 'oatmeal,berries', 'b4': 'pancakes',  'l1': 'biryani',  'l3': 'curry,chicken', 'l4': 'pasta,alfredo', 'l5': 'club,sandwich', 'l6': 'sushi', 'f1': 'burger', 'f2': 'fries', 'f3': 'pizza', 'f6': 'iced,coffee', 'f7': 'donut', 's1': 'notebook', 's2': 'pens', 's3': 'highlighter', 's4': 'calculator', 's5': 'sticky,notes',  'breakfast': 'breakfast,cafe', 'lunch': 'lunch,plate', 'fastfood': 'fastfood,burger', 'stationery': 'stationery,desk'};
function fb(el,k){const n=+(el.dataset.n||0),ex=['jpeg','png','webp','JPG','JPEG','PNG','jpg'];
 if(n<ex.length){el.dataset.n=n+1;el.src=el.dataset.b+'.'+ex[n]}
 else if(n===ex.length){el.dataset.n=n+1;let h=0;for(const c of el.dataset.id)h=h*31+c.charCodeAt(0);console.warn('Image not found: '+el.dataset.b+'.jpg - using placeholder photo');el.src='https://loremflickr.com/640/480/'+k+'?lock='+(h%900)}
 else el.style.visibility='hidden'}
const im=id=>{const p=PRODUCTS.find(x=>x.id===id),src=p?p.img:'images/'+id+'.jpg';return `<img src="${src}" data-b="${src.replace(/\.\w+$/,'')}" data-id="${id}" alt="" loading="lazy" onerror="fb(this,KW['${id}'])">`};
const CATS={breakfast:['🍳','Breakfast','7am – 11am'],lunch:['🍛','Lunch','12pm – 4pm'],fastfood:['🍔','Fast Food','All day'],stationery:['✏️','Stationery','Study supplies']};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rs=n=>'Rs '+n.toLocaleString();
const getCart=()=>{try{return JSON.parse(localStorage.getItem('lilac'))||[]}catch(e){return[]}};
const saveCart=c=>{try{localStorage.setItem('lilac',JSON.stringify(c))}catch(e){}count()};
const count=()=>{const n=getCart().reduce((a,i)=>a+i.qty,0);const b=$('#cc');if(b)b.textContent=n};
function toast(m){let t=$('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.append(t)}t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function add(id,qty=1,sel={},extra=0){const p=PRODUCTS.find(x=>x.id===id),c=getCart(),key=id+JSON.stringify(sel);const f=c.find(i=>i.key===key);
 if(f)f.qty+=qty;else c.push({key,id,qty,sel,price:p.price+extra});saveCart(c);toast(p.name+' added to cart')}
const cardHTML=p=>`<article class="card"><a class="thumb" href="product.html?id=${p.id}" aria-label="${p.name}">${im(p.id)}</a><div class="in"><div>${p.tags.map(t=>`<span class="tag ${t==='V'?'v':''}">${t==='V'?'Veg':t}</span>`).join('')}</div><h3><a href="product.html?id=${p.id}">${p.name}</a></h3><p>${p.desc}</p><div class="row"><span class="price">${rs(p.price)}</span><button class="btn sm" data-add="${p.id}">Add</button></div></div></article>`;
function layout(){const page=location.pathname.split('/').pop()||'index.html';
 const links=[['index.html','Home'],['breakfast.html','Breakfast'],['lunch.html','Lunch'],['fastfood.html','Fast Food'],['stationery.html','Stationery'],['contact.html','Contact']];
 document.body.insertAdjacentHTML('afterbegin',`<header><div class="wrap bar"><a class="logo" href="index.html">Lilac<span>Café</span></a><nav id="nav">${links.map(l=>`<a href="${l[0]}" class="${page===l[0]?'on':''}">${l[1]}</a>`).join('')}</nav><div style="display:flex;gap:8px;align-items:center"><a class="cartbtn" href="cart.html">Cart<b id="cc">0</b></a><button class="menu-toggle" aria-label="Menu" onclick="$('#nav').classList.toggle('open')">☰</button></div></div></header>`);
 document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap"><div class="cols"><div><h4>LilacCafé</h4><p>Your campus café and study-supply stop. Fresh food, fair prices, open late for finals.</p></div><div><h4>Menu</h4>${links.slice(1,5).map(l=>`<a href="${l[0]}">${l[1]}</a>`).join('')}</div><div><h4>Visit</h4><p>Student Centre, Ground Floor<br>Mon–Sat 7am – 10pm<br>cafe@lilaccafe.edu.pk</p></div></div><small>© 2026 LilacCafé – University project prototype</small></div></footer>`);count()}
function menuPage(cat){const list=PRODUCTS.filter(p=>p.cat===cat);const g=$('#grid');let q='',sort='',veg=false;
 const draw=()=>{let l=list.filter(p=>p.name.toLowerCase().includes(q)&&(!veg||p.tags.includes('V')));if(sort==='lo')l.sort((a,b)=>a.price-b.price);if(sort==='hi')l.sort((a,b)=>b.price-a.price);
  g.innerHTML=l.length?l.map(cardHTML).join(''):'<div class="empty" style="grid-column:1/-1">No items match. Try a different search.</div>'};
 $('#q').oninput=e=>{q=e.target.value.toLowerCase();draw()};$('#sort').onchange=e=>{sort=e.target.value;draw()};
 const v=$('#veg');if(v)v.onclick=()=>{veg=!veg;v.classList.toggle('on',veg);draw()};draw()}
function productPage(){const id=new URLSearchParams(location.search).get('id');const p=PRODUCTS.find(x=>x.id===id)||PRODUCTS[0];document.title=p.name+' – LilacCafé';
 const sel={};let qty=1;const optHTML=Object.entries(p.opts).map(([k,v])=>`<div class="opt"><label>${k}</label>${v.map((o,i)=>`<button class="chip ${i?'':'on'}" data-k="${k}" data-v="${o}">${o}</button>`).join('')}</div>`).join('');
 Object.entries(p.opts).forEach(([k,v])=>sel[k]=v[0]);
 const food=p.cat!=='stationery';
 $('#detail').innerHTML=`<div class="big">${im(p.id)}</div><div><a href="${p.cat}.html" class="tag">← ${CATS[p.cat][1]}</a><h1>${p.name}</h1><p>${p.desc}</p><p class="price" style="font-size:1.6rem;margin:10px 0" id="pr">${rs(p.price)}</p>${food?`<div class="nutri"><div><b>${p.cal}</b>kcal</div><div><b>${p.prot}</b>protein</div><div><b>${p.time}</b>prep</div></div>`:''}${optHTML}<div class="opt"><label>Quantity</label><div class="qty"><button id="m" aria-label="Less">−</button><span id="n">1</span><button id="pl" aria-label="More">+</button></div></div><button class="btn" id="addb">Add to cart</button> <a class="btn ghost" href="cart.html">View cart</a></div>`;
 const extra=()=>Object.values(sel).reduce((a,s)=>{const m=s.match(/\+(\d+)/);return a+(m?+m[1]:0)},0);
 const upd=()=>{$('#pr').textContent=rs((p.price+extra())*qty);$('#n').textContent=qty};
 $$('.chip[data-k]').forEach(c=>c.onclick=()=>{$$(`.chip[data-k="${c.dataset.k}"]`).forEach(x=>x.classList.remove('on'));c.classList.add('on');sel[c.dataset.k]=c.dataset.v;upd()});
 $('#m').onclick=()=>{qty=Math.max(1,qty-1);upd()};$('#pl').onclick=()=>{qty++;upd()};
 $('#addb').onclick=()=>add(p.id,qty,{...sel},extra());
 $('#related').innerHTML=PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4).map(cardHTML).join('')}
function cartPage(){const box=$('#lines'),sum=$('#sum');
 const draw=()=>{const c=getCart();
  if(!c.length){box.innerHTML='<div class="empty"><h3>Your cart is empty</h3><p>Add something tasty from the menu.</p><br><a class="btn" href="lunch.html">Browse menu</a></div>';sum.style.display='none';return}
  sum.style.display='';box.innerHTML=c.map((i,x)=>{const p=PRODUCTS.find(p=>p.id===i.id);return`<div class="line"><div class="e">${im(p.id)}</div><div><b>${p.name}</b><br><small>${Object.values(i.sel).join(' · ')}</small></div><div class="qty"><button data-d="${x}" data-s="-1" aria-label="Less">−</button><span>${i.qty}</span><button data-d="${x}" data-s="1" aria-label="More">+</button></div><div style="text-align:right"><b>${rs(i.price*i.qty)}</b><br><button class="rm" data-r="${x}">Remove</button></div></div>`}).join('');
  const sub=c.reduce((a,i)=>a+i.price*i.qty,0),disc=$('#promo').dataset.ok?Math.round(sub*.1):0,tax=Math.round((sub-disc)*.05);
  $('#sub').textContent=rs(sub);$('#disc').textContent='− '+rs(disc);$('#tax').textContent=rs(tax);$('#tot').textContent=rs(sub-disc+tax)};
 document.addEventListener('click',e=>{const c=getCart(),d=e.target.dataset;
  if(d.s){c[d.d].qty+=+d.s;if(c[d.d].qty<1)c.splice(d.d,1);saveCart(c);draw()}
  if(d.r){c.splice(d.r,1);saveCart(c);draw()}});
 $('#applyp').onclick=()=>{if($('#promo').value.trim().toUpperCase()==='STUDENT10'){$('#promo').dataset.ok=1;toast('10% student discount applied');draw()}else toast('Invalid code. Try STUDENT10')};
 $('#co').onsubmit=e=>{e.preventDefault();if(!getCart().length)return toast('Cart is empty');const n='LC-'+Math.floor(1000+Math.random()*9000);saveCart([]);
  $('#cartarea').innerHTML=`<div class="empty box"><h2>Order ${n} placed!</h2><p>Thanks, ${$('#nm').value}. We'll have it ready at the counter soon.</p><br><a class="btn" href="index.html">Back to home</a></div>`};draw()}
document.addEventListener('click',e=>{const id=e.target.dataset&&e.target.dataset.add;if(id)add(id)});
document.addEventListener('DOMContentLoaded',()=>{layout();const t=document.body.dataset.page,c=document.body.dataset.cat;
 if(c)menuPage(c);if(t==='product')productPage();if(t==='cart')cartPage();
 if(t==='home')$$('.tile img').forEach(i=>{});$('#pop').innerHTML=['b4','l1','f1','f6'].map(i=>cardHTML(PRODUCTS.find(p=>p.id===i))).join('');
 const cf=$('#cf');if(cf)cf.onsubmit=e=>{e.preventDefault();cf.reset();toast('Message sent. We\'ll reply soon!')}});
