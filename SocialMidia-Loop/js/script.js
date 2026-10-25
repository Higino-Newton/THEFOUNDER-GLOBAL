/**/
const STORAGE_KEY = "Loop_Criar_v2_offline";


// Aqui estarão os posts padrões, já postos manualmente, todo o codigo, pode se clonar e mudar algumas informações da postagem de cada pessoa
const defaultPosts = [
  {
    id: Date.now() + 1,
    author: "Maria Silva",
    authorAvatar: "img/loop.jpg",
    date: "12 Nov 2025 · Luanda",
    media: "img/post1.jpg",
    desc: "Projeto comunitário de reciclagem — junta-te a nós!",
    likes: 12,
    liked: false,
    followed: false,
    tags: ["community"],
  },
  {
    id: Date.now() + 2,
    author: "João Pedro",
    authorAvatar: "img/perfil4.jpg",
    date: "11 Nov 2025 · Huíla",
    media: "img/post2.jpg",
    desc: "Ideias de empreendedorismo local — workshop grátis.",
    likes: 5,
    liked: false,
    followed: false,
    tags: ["business"],
  },
  {
    id: Date.now() + 3,
    author: "Clara (Kids)",
    authorAvatar: "img/perfil5.jpg",
    date: "10 Nov 2025 · Luanda",
    media: "img/post7.jpg",
    desc: "Desenhando a natureza — atividade divertida para crianças!",
    likes: 34,
    liked: false,
    followed: false,
    tags: ["kids", "education"],
  },
];
//Função para processar posts
function loadPosts() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
    return defaultPosts;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
    return defaultPosts;
  }
}
//Função para salvar posts
function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function renderFeed(filterFn = null) {
  const posts = loadPosts();
  const container = document.getElementById("posts");
  if (!container) return;
  container.innerHTML = "";
  const list = filterFn ? posts.filter(filterFn) : posts;
  list
    .slice()
    .reverse()
    .forEach((post) => {
      const article = document.createElement("article");
      article.className = "post";
      article.dataset.id = post.id;
      article.innerHTML = `
      <div class="post-controls">
        <span class="close-post" title="Fechar">✕</span>
        <span class="more-post" title="Mais">⋯</span>
        <div class="post-menu">
        <ul>
        <li>Editar</li>
        <li>Compartilhar</li>
        <li>Salvar</li>
        </ul>
        </div>
      </div>
      <div class="media"><img src="${post.media}" alt="post image"></div>
      <div class="meta">
        <div class="author">
          <img src="${post.authorAvatar}" alt="autor">
          <div>
            <div class="name">${post.author}</div>
            <div class="date">${post.date}</div>
          </div>
        </div>
        <button class="follow-btn">${
          post.followed ? "Seguindo" : "Seguir"
        }</button>
      </div>
      <div class="desc">${post.desc}</div>
      <div class="actions">
        <div class="left-actions"><div class="action-btn comment-btn" title="Comentar">💬 Comentar</div></div>
        <div class="right-actions">
          <div class="action-btn like-btn" title="Curtir">${
            post.liked ? "💖" : "👍"
          } <span class="like-count">${post.likes}</span></div>
          <div class="action-btn unlike-btn" title="Descurtir">👎</div>
        </div>
      </div>
    `;
      document.querySelector(".bicon").addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
      });
      document.querySelectorAll(".menu-slide").forEach((item) => {
        item.addEventListener("click", () => {
          alert("Você clicou em um item");
        });
      });

      document.querySelectorAll(".more-post").forEach((btn) => {
        btn.addEventListener("click", () => {
          const menu = btn.nextElementSibling;
          if (menu) {
            menu.style.display =
              (menu.style.display == "block") ? "none" : "block";
          }
        });
      });
      document.querySelectorAll(".close-post").forEach((btn) => {
        btn.addEventListener("click", () => {
          const post = btn.closest(".post");

          if (post) {
            post.remove();
          }
        });
      });
      const likeBtn = article.querySelector(".like-btn");
      const unlikeBtn = article.querySelector(".unlike-btn");
      const followBtn = article.querySelector(".follow-btn");
      likeBtn.addEventListener("click", () => toggleLike(post.id, article));
      unlikeBtn.addEventListener("click", () => toggleUnlike(post.id, article));
      followBtn.addEventListener("click", () =>
        toggleFollow(post.id, followBtn)
      );
      container.appendChild(article);

      article.style.opacity = 0;
      article.style.transform = "translateY(8px)";
      setTimeout(() => {
        article.style.transition = "all 320ms ease";
        article.style.opacity = 1;
        article.style.transform = "translateY(0)";
      }, 30);
    });
}
//Função do icon de Like
function toggleLike(id, articleEl) {
  const posts = loadPosts();
  const idx = posts.findIndex((p) => p.id == id);
  if (idx === -1) return;
  posts[idx].liked = !posts[idx].liked;
  posts[idx].likes = posts[idx].liked
    ? (posts[idx].likes || 0) + 1
    : Math.max(0, (posts[idx].likes || 0) - 1);
  savePosts(posts);
  const likeCount = articleEl.querySelector(".like-count");
  likeCount.textContent = posts[idx].likes;
  articleEl.querySelector(".like-btn").innerHTML = `${
    posts[idx].liked ? "💖" : "👍"
  } <span class="like-count">${posts[idx].likes}</span>`;
}
//Função  do icon não curtida
function toggleUnlike(id, articleEl) {
  const posts = loadPosts();
  const idx = posts.findIndex((p) => p.id == id);
  if (idx === -1) return;
  posts[idx].likes = Math.max(0, (posts[idx].likes || 0) - 1);
  posts[idx].liked = false;
  savePosts(posts);
  const likeCount = articleEl.querySelector(".like-count");
  likeCount.textContent = posts[idx].likes;
  articleEl.querySelector(
    ".like-btn"
  ).innerHTML = `👍 <span class="like-count">${posts[idx].likes}</span>`;
}
//Função do botão seguir
function toggleFollow(id, btn) {
  const posts = loadPosts();
  const idx = posts.findIndex((p) => p.id == id);
  if (idx === -1) return;
  posts[idx].followed = !posts[idx].followed;
  savePosts(posts);
  btn.textContent = posts[idx].followed ? "Seguindo" : "Seguir";
}

//Essa função serve para criar posts do usuario online
function createPost(author, media, desc, tags = []) {
  const posts = loadPosts();
  const novo = {
    id: Date.now(),
    author: author || "Usuário",
    authorAvatar: "img/Avatar.jpg",
    date: new Date().toLocaleDateString("pt-PT"),
    media: media || "img/.jpg",
    media: media || "video/.mp4",
    desc: desc || "",
    likes: 0,
    liked: false,
    followed: false,
    tags: tags,
  };
  posts.push(novo);
  savePosts(posts);
}

function renderKidsFeed() {
  renderFeed((p) => (p.tags || []).includes("kids"));
}

function renderProfile(authorName) {
  const posts = loadPosts();
  const container = document.getElementById("profile-posts");
  if (!container) return;
  container.innerHTML = "";
  const list = posts.filter((p) => p.author === authorName).reverse();
  if (list.length === 0) {
    container.innerHTML =
      "<div style='padding:12px;color:var(--muted)'>Nenhuma publicação encontrada.</div>";
    return;
  }
  list.forEach((post) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `<div class="media"><img src="${post.media}" alt=""></div><div style="padding:10px"><div style="font-weight:700">${post.author}</div><div style="color:var(--muted);font-size:13px">${post.date}</div><div style="margin-top:8px">${post.desc}</div></div>`;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("posts")) renderFeed();
  if (document.getElementById("child-posts")) renderKidsFeed();
  if (document.getElementById("profile-posts")) {
    const author =
      document.getElementById("profile-posts").dataset.author ||
      "Higino Carlos";
    renderProfile(author);
    const nameEl = document.querySelector(".profile-info .name");
    if (nameEl) nameEl.textContent = author;
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("js/sw.js")
      .then((reg) => console.log("SW registrado:", reg.scope))
      .catch((err) => console.log("SW erro:", err));
  });
}
document.querySelector('.menu-chanduichi').addEventListener('click', () => {
  const menu = document.querySelector('.menu-slide');
  menu.style.display=(menu.style.display==='block')?'none':'block';
});
document.querySelector('.menu-slide ul li').forEach(item=>{
  item.addEventListener('click', () => {
    alert(`Você clicou em ${item.textContent}`)

    
  })
  
})
