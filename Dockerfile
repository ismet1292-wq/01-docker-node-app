FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev

COPY --chown=node:node app.js ./
USER node

EXPOSE 3000

HEALTHCHECK --interval=3s --timeout=3s --start-period=5s --retries=10 CMD node -e "fetch('http://127.0.0.1:3000/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "app.js"]
