import mineflayer from 'mineflayer';

import pkg from 'mineflayer-pathfinder'
const { pathfinder, Movements, goals } = pkg

import GetResponse from './agents/gemini.js';

const bot = mineflayer.createBot({
    host: 'localhost',
    username: 'Bee',
    auth: 'offline',
    port: '25565',
    version: '1.21'
})

bot.loadPlugin(pathfinder)

bot.on('chat', async (username, message) => {

    if (username === bot.username) return

    const agentResponse = await GetResponse(username, message)

    if (agentResponse.trim() === 'ComeToPlayer') {
      const player = bot.players[username]?.entity;
      if (player) {
        bot.pathfinder.setGoal(new goals.GoalFollow(player, 1));
        bot.chat('Ok!');
      }
    } else{
        bot.chat(agentResponse)
    }


  });