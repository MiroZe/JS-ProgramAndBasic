function solve(arr){
 
    let installedGames = arr[0].split(' ');
    

    for (let i =1 ; i < arr.length; i++) {
        let elementOfArray = arr[i].split(' ');
        let command = elementOfArray[0];
        let game = elementOfArray[1];
        if (command === 'Play') {
            break;
        } else if(command === 'Install' && installedGames.includes(game) === false) {
            installedGames.push(game);
        } else if(command === 'Uninstall' && installedGames.includes(game)) {
            let index = installedGames.indexOf(game);
            installedGames.splice(index, 1);
        } else if( command === 'Update' && installedGames.includes(game)) {
            let index = installedGames.indexOf(game);
            installedGames.splice(index,1);
            installedGames.push(game);
        } else if( command === 'Expansion') {
            let expansion = game.split('-');
            let expansionGame = expansion[0];
            if (installedGames.includes(expansionGame)) {
                let expandedGame = expansion.join(':');
                let index = installedGames.indexOf(expansionGame);
                installedGames.splice(index + 1, 0, expandedGame);
            }
        }

    }
    
    
    console.log(installedGames.join(' '));
    
    
      }
      solve(['CS WoW Diablo',

      'Uninstall XCOM',
      
      'Update PeshoGame',
      
      'Update WoW',
      
      'Expansion Civ-V',
      
      'Play!'])
      