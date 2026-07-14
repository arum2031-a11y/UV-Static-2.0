self.__uv$config = {
  prefix: "/active/uv/",
  // We use an active public wisp cluster link
  wisp: "wss://wisp.mercurywork.shop/", 
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/active/uv/uv.handler.js",
  client: "/active/uv/uv.client.js",
  bundle: "/active/uv/uv.bundle.js",
  config: "/active/uv/uv.config.js",
  sw: "/active/uv/uv.sw.js",
};
