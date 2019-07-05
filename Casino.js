clsss Casino ( var name ) {
	constructor( let name ) {
		casinoName = name;
	}
	
	let casinoName;
	let casinoMoney;

	var getMoney() {
		return casinoName;
	}
	
	 putMoney( var money ) {
		casinoMoney += money;
	}
	
	boolean method( var money ) {
		if (money<(this.casinomoney+money)/3){
			return false;
		}	
		else{
			return true;
		}
	}
	play( var money ) {
		if ( method( money ) ) {
			// realize the playing process;
			let rndNum = random(100,999);
			let strArray = rndNum.tostring()
			if (strArray.charAt(0)==strArray.charAt(1) && strArray.charAt(0)==strArray.charAt(2){
				casinoMoney -= money *3;
				return money *3 ;
			}
			else if(strArray.charAt(0)!= strArray.charAt(1) && strArray.charAt(0)!=strArray.charAt(2) && strArray.charAt(0)!=strArray.charAt(2)){
				casinoMoney += money;
				return 0;
				
			}
			else{
				casinoMoney -= money *2;
				return money *2 ;
				
			}
				
		} else {
			alert "don't play!";
		}
	}
}

class adminUser ( var name ){
	
	constructor( let name ) {
		adminUsername = name
	}
	let adminUsername;

	var casino;
	 createCasino( var casinoName, var startMoney ) {
		
		casino = new Casino( casinoName );
		casino.putMoney( startMoney );
	}
	Casino getCasino() {
		return casino;
	}
	 putMoneyToCasino( var money ) {
		if ( casnio )
			casino.putMoney( money );
	}
	var getMoneyToCasino() {
		if ( casino )
			casino.getMoney();
	}
	
	
}

class playUser( var name ) {
	
	constructor( var name ) {
		playUsername = name;
	}
	var playUsername;
	Casino pCasino;
	 setPlayCasino( Casino csn ) {
		pCasino = csn;
	}
	Casino getPlayCasino() {
		return pCasino;
	}
	var playCasino( var money ) {
		pCasino.play( money )
	}
}