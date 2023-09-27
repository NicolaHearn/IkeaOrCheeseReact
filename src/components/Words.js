import Random from "./Random";

function Words() {

    class Words {
        constructor() {
          this.ikeaWords = [
            "tvarhand",
            "skogsfraken",
            "rsenskarm",
            "koge",
            "smaka",
            "bygel",
            "frotorp",
            "tarno",
            "kuggo",
            "raskog"
          ];
          this.cheeseWords = [
              "gammalost",
              "kaffeost",
              "vasterbottenost",
              "potkase",
              "tynjetaler",
              "bergkase",
              "lighvan",
              "lajta",
              "hajdu",
              "mesesajt",
              "balaton",
              "alkmaar",
              "kashkaval"
            ];
          this.allWords = this.ikeaWords.concat(this.cheeseWords);
        
        }
      }
      const words = new Words();

      return(
        <Random words={words}/>
      )
    }
      
    export default Words;