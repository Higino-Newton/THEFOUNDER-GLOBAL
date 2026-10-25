//Array, dos produtos 
const products = [
  //Quadros
    {id:1,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (1).jpg'},
    {id:2,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/serviços (6).jpg'},
    {id:3,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (2).jpg'},
    {id:4,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (3).jpg'},
    {id:5,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (4).jpg'},
    {id:6,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (5).jpg'},
    {id:7,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (6).jpg'},
    {id:8,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (7).jpg'},
    {id:9,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (8).jpg'},
    {id:10,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (9).jpg'},
    {id:11,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (10).jpg'},
    {id:12,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (11).jpg'},
    {id:13,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (12).jpg'},
    {id:14,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (13).jpg'},
    {id:15,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (14).jpg'},
    {id:16,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (15).jpg'},
    {id:17,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (16).jpg'},
    {id:18,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (17).jpg'},
    {id:19,name:'Nome do Serviço', cat:'quadros',price:7000,desc:'Descrição do Serviço', img:'images/quadros (18).jpg'},

    //Bases
    {id:20,name:'Nome do Serviço', cat:'bases',price:7000,desc:'Descrição do Serviço', img:'images/bases (1).jpg'},
    {id:21,name:'Nome do Serviço', cat:'bases',price:7000,desc:'Descrição do Serviço', img:'images/bases (2).jpg'},
    {id:22,name:'Nome do Serviço', cat:'bases',price:7000,desc:'Descrição do Serviço', img:'images/bases (3).jpg'},
    {id:23,name:'Nome do Serviço', cat:'bases',price:7000,desc:'Descrição do Serviço', img:'images/bases (4).jpg'},
    {id:24,name:'Nome do Serviço', cat:'bases',price:7000,desc:'Descrição do Serviço', img:'images/bases (5).jpg'},
     {id:25,name:'Nome do Serviço', cat:'bases',price:7000,desc:'Descrição do Serviço', img:'images/base (1).jpg'},
    {id:26,name:'Nome do Serviço', cat:'bases',price:7000,desc:'Descrição do Serviço', img:'images/base (2).jpg'},
    {id:45,name:'Nome do Serviço', cat:'bases',price:7000,desc:'Descrição do Serviço', img:'images/base (3).jpg'},
    {id:46,name:'Nome do Serviço', cat:'bases',price:7000,desc:'Descrição do Serviço', img:'images/base (4).jpg'},
    {id:47,name:'Nome do Serviço', cat:'bases',price:7000,desc:'Descrição do Serviço', img:'images/base (5).jpg'},
    
    
    //Apoios
    {id:27,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (1).jpg'},
    {id:28,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (2).jpg'},
    {id:29,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (3).jpg'},
    {id:30,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (4).jpg'},
    {id:31,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (5).jpg'},
    {id:32,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (6).jpg'},
    {id:33,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (7).jpg'},
    {id:34,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (8).jpg'},
    {id:35,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (9).jpg'},
    {id:36,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (10).jpg'},
    {id:37,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (11).jpg'},
    {id:38,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (12).jpg'},
    {id:39,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (13).jpg'},
    {id:40,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (14).jpg'},
    {id:41,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (15).jpg'},
    {id:42,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (16).jpg'},
    {id:43,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (17).jpg'},
    {id:44,name:'Nome do Serviço', cat:'apoios',price:7000,desc:'Descrição do Serviço', img:'images/apoios (18).jpg'},


    //Fitas
    {id:48,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (1).jpg'},
    {id:49,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (2).jpg'},
    {id:50,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (3).jpg'},
    {id:51,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (4).jpg'},
    {id:52,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (5).jpg'},
    {id:53,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (6).jpg'},
    {id:54,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (7).jpg'},
    {id:55,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (8).jpg'},
    {id:56,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (9).jpg'},
    {id:57,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (10).jpg'},
    {id:58,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (11).jpg'},
    {id:59,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (12).jpg'},
    {id:60,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (13).jpg'},
    {id:61,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (14).jpg'},
    {id:62,name:'Nome do Serviço', cat:'fita',price:7000,desc:'Descrição do Serviço', img:'images/fitas (15).jpg'},
    
    
  ];

  const grid = document.getElementById('grid');
  const filter = document.getElementById('filter');

  function formatKz(v){ return v.toLocaleString('pt-PT') + ' Kz'; }
  function render(list){
    grid.innerHTML = '';
    list.forEach(p=>{
      const card = document.createElement('div'); card.className = 'card';
      const thumbHtml = p.img
        ? `<img src="${p.img}" loading="lazy" alt="${p.name}" style="width:100%;height:190px;object-fit:cover; border-radius:8px">`
        : `<div class="thumb">${p.name.split(' ')[0].toUpperCase()}</div>`;

      card.innerHTML = `
        ${thumbHtml}
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="actions">
          <div class="price">${formatKz(p.price)}</div>
        </div>
      `;
      grid.appendChild(card);
    });
    
  }
  // iniciar os produtos, serve para mostrar os produtos armagenados
  render(products);

      //Filtrar a categorias
  function applyFilters(){
    const f = (filter?.value || 'all');
    const out = products.filter(p=>{
      const fmatch = (f === 'all') || (p.cat === f);
      return fmatch;
    });
    render(out);
  }
  filter?.addEventListener('change', applyFilters);





