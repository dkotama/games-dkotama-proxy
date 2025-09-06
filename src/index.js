export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Match /game1/*
    if (url.pathname.startsWith("/game1")) {
      // Strip "/game1" from the path
      const newPath = url.pathname.replace(/^\/game1/, "");
      
      // Forward request to your original Worker.dev game
      const target = `https://spend-dpr-game.darma-kotama6122.workers.dev${newPath}${url.search}`;

      return fetch(target, request);
    }

    // Optional: fallback for other routes
    return new Response("Not Found", { status: 404 });
  }
};

