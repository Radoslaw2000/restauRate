
export default class Konto{
    static instance;

    email = "";
    index = "1";
    login = "";

    static getInstance() {
        if (Konto.instance == null) {
            Konto.instance = new Konto();
        }
        return this.instance;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }

    getIndex(){
        return this.index;
    }

    setIndex(index){
        this.index = index;
    }

    getLogin(){
        return this.login;
    }

    setLogin(login){
        this.login = login;
    }

}