import fetch from "node-fetch";
let arrayAgentsName = [];
const buscarAgents = async () => {
    console.time('Load')
    const agents = await fetch('https://valorant-api.com/v1/agents');
    const agentsList = await agents.json();
    const agentListData = await agentsList.data;
    
    for(let i of agentListData) {
        let agentsName = i.displayName;
        arrayAgentsName.push(agentsName);
    }
    console.log(arrayAgentsName);

    let nome = 'Killjoy'
    for(let i = 0; i < arrayAgentsName.length; i++) {
        if(nome == arrayAgentsName[i]) {
            console.log('igual')
        } else {
            console.log('diferente')
        }
    }
    console.timeEnd('Load')  
}
buscarAgents();


