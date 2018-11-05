import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DdPage } from '../dd/dd';
import { DbPage } from '../db/db';
import { HumanzPage } from '../humanz/humanz';
import { MjPage } from '../mj/mj';
import { WallPage } from '../wall/wall';
import { GorillazPage } from '../gorillaz/gorillaz';
import { BowiePage } from '../bowie/bowie';
import { FloydPage } from '../floyd/floyd';
import { MichaelPage } from '../michael/michael';
import { TrddPage } from '../trdd/trdd';
import { TrdbPage } from '../trdb/trdb';
import { TrwallPage } from '../trwall/trwall';
import { TrmjPage } from '../trmj/trmj';
import { RevddPage } from '../revdd/revdd';
import { RevdbPage } from '../revdb/revdb';
import { RevmjPage } from '../revmj/revmj';
import { RevwallPage } from '../revwall/revwall';
import { CaratulaPage } from '../caratula/caratula';
import { BiografiaPage } from '../biografia/biografia';
import { TracksPage } from '../tracks/tracks';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dd=DdPage;
  db=DbPage;
  humanz=HumanzPage;
  mj=MjPage;
  wall=WallPage;
  mike=MichaelPage;
  gorillaz=GorillazPage;
  bowie=BowiePage;
  floyd=FloydPage;
  trdb=TrdbPage;
  trdd=TrddPage;
  trwall=TrwallPage;
  trmj=TrmjPage;
  revdd=RevddPage;
  revdb=RevdbPage;
  revmj=RevmjPage;
  revwall=RevwallPage;
  tracks=TracksPage; 
  discos=[
    {
      artista: "Gorillaz",
      album: "Demon Days",
      anio: "2005",
      valoracion: [1,2,3,4,5],
      imagen: "../assets/imgs/Gorillazdemondays.jpg",
      color: "#AAAAA",
      id: 0,
      biografia: {
        imagenA: "../assets/imgs/gorillaz.jpg",
        parrafos: ["Conceived as the first virtual hip-hop group, Gorillaz blended the musical talents of Dan The Automator Nakamura, Blur's Damon Albarn, Cibo Matto's Miho Hatori, and Tom Tom Club's Tina Weymouth and Chris Frantz with the arresting visuals of Jamie Hewlett, best known as the creator of the cult comic Tank Girl. Nakamura's Deltron 3030 cohorts Kid Koala and Del tha Funkee Homosapien rounded out the creative team behind the Gorillaz quartet, whose virtual members included 2-D, the cute but spacy singer/keyboardist; Murdoc, the spooky, possibly Satanic bassist and the brains behind the group; Russel, a drummer equally inspired by Farrakhan and Chaka Khan and possessed by funkyphantoms that occasionally rise up and provide some zombie-style rapping; and last but not least, Noodle, a ten-year-old Japanese guitar virtuosa and martial arts master. The group's website showcased Hewlett's visuals and the group's music in eye- and ear-catching detail.",
                  "Tomorrow Comes TodayGorillaz debuted in late 2000 with the Tomorrow Comes Today EP, which they followed early the next year with the popular Clint Eastwood single. A self-titled full-length debut album arrived in spring 2001. Gorillaz was a massive worldwide success and achieved platinum-level sales in the U.S.; worldwide, it sold over seven million copies. The group's Svengalis were quick to capitalize, and released the B-sides collection G-Sides, the Phase One: Celebrity Takedown DVD, and the dub-inspired remix album Laika Come Home in 2002. The project soon went on hiatus, however, as Albarn resumed work with Blur for their seventh album, 2003's Think Tank."
                  ]      
      },
      songs: [
        "Intro",
        "Last Living Souls",
        "Kids with Guns",
        "O Green World",
        "Dirty Harry",
        "Feel Good Inc.",
        "El Mañana",
        "Every Planet We Reach is Dead",
        "November Has Come",
        "All Alone",
        "DARE",
        "Fire Coming Out of the Monkey's Head",
        "Don't Get Lost in Heaven",
        "Demon Days"
      ]
    },
    {
      artista: "David Bowie",
      album: "Ziggy Stardust",
      anio: "1972",
      valoracion: [1,2,3,4,5],
      imagen: "../assets/imgs/Bowie.jpg",
      color: "#EB5160",
      id:1,
      biografia: {
        imagenA: "../assets/imgs/Bowie2.jpg",
        parrafos: ["David Bowie was one of the most influential and prolific writers and performers of popular music, but he was much more than that; he was also an accomplished actor, a mime and an intellectual, as well as an art lover whose appreciation and knowledge of it had led to him amassing one of the biggest collections of 20th century art.",
                  "Born David Jones, he changed his name to Bowie in the 1960s, to avoid confusion with the then well-known Davy Jones (lead singer of The Monkees). The 1960s were not a happy period for Bowie, who remained a struggling artist, awaiting his breakthrough. He dabbled in many different styles of music (without commercial success), and other art forms such as acting, mime, painting, and play-writing. He finally achieved his commercial breakthrough in 1969 with the song Space Oddity, which was released at the time of the moon landing. Despite the fact that the literal meaning of the lyrics relates to an astronaut who is lost in space, this song was used by the BBC in their coverage of the moon landing, and this helped it become such a success. The album, which followed Space Oddity, and the two, which followed (one of which included the song The Man Who Sold The World, covered by Lulu and Nirvana) failed to produce another hit single, and Bowie's career appeared to be in decline. However, he made the first of many successful comebacks in 1972 with Ziggy Stardust, a concept album about a space-age rock star. This album was followed by others in a similar vein, rock albums built around a central character and concerned with futuristic themes of Armageddon, gender dysfunction/confusion, as well as more contemporary themes such as the destructiveness of success and fame, and the dangers inherent in star worship. In the mid 1970s, Bowie was a heavy cocaine abuser and sometime heroin user."
                  ]      
      },
      songs:[
        "Five Years",
        "Soul Love",
        "Moonage Daydream",
        "Starman",
        "It Ain't Easy",
        "Lasy Stardust",
        "Star",
        "Hang On to Yourself",
        "Ziggy Stardust",
        "Sufragette City",
        "Rock n' Roll Suicide"
      ]
    },
    {
      artista: "Pink Floyd",
      album: "The Wall",
      anio: "1979",
      valoracion: [1,2,3,4,5],
      imagen: "../assets/imgs/Wall.jpg",
      color: "#B7999C",
      id: 2,
      biografia: {
        imagenA: "../assets/imgs/floyd.jpg",
        parrafos: ["Syd Barrett: vocals, guitar (born: Roger Keith Barrett; 6 January, 1946; Cambridge, Cambridgeshire, England, UK). In 1968, Syd Barrett left the band. Syd died in July, 2006 at aged 60 from pancreatic cancer. David Gilmour: vocals, guitar (born: David John Gilmour; 6 March, 1946; Cambridge, Cambridgeshire, England, UK). In 1968, Gilmour replaced Syd Barrett. Roger Waters: vocals, bass guitar (born: George Roger Waters; 6 September, 1943; Great Bookham, Surrey, England, UK). In 1983, he left the band. Richard Wright: keyboards, back-up vocals (born: 28 July, 1943; Hatch End, England, UK). Was fired from the band in 1979, rejoined in 1986 as a session player and was officially reinstated in 1992. The second member who did every tour. Richard died on 15 September, 2008 at age 65 from cancer. Nick Mason: drums, percussion (born: Nicholas Berkeley Mason; 27 January, 1944; Birmingham, England, UK). The only member to have appeared on every album. One of two members who did every tour.",
                  ""
                  ]      
      },
      songs:[
        "In the Flesh?",
        "The Thin Ice",
        "Another Brick in the Wall (Part 1)",
        "The Happiest Days of Our Lives",
        "Another Brick in the Wall",
        "Mother",
        "Goodbye BLue Sky",
        "Empty Spaces",
        "Young Lust",
        "One of My Turns",
        "Don't Leave Me Now",
        "Another Brick in the Wall (Part 3)",
        "Goodbye Cruel World",
        "Hey You",
        "Is There Anybody Out There?",
        "Nobody Home",
        "Vera",
        "Bring the Boys Back Home",
        "Comfortably Numb",
        "The Show Must Go On",
        "In the Flesh",
        "Run Like Hell",
        "Waiting for the Worms",
        "Stop",
        "The Trial",
        "Outside the Wall"
      ]
    },
    
    {
      artista: "Michael Jackson",
      album: "Thriller",
      anio: "1982",
      valoracion: [1,2,3,4,5],
      imagen: "../assets/imgs/MJ.jpg",
      color: "#DFE0E5",
      id: 3,
      biografia: {
        imagenA: "../assets/imgs/jackson.jpg",
        parrafos: ["Michael Joseph Jackson was born in Gary, Indiana on August 29, 1958, and entertained audiences nearly his entire life. His father, Joe Jackson (no relation to Joe Jackson, also a musician), had been a guitarist, but was forced to give up his musical ambitions following his marriage to Katherine Jackson (née Katherine Esther Scruse). Together, they prodded their growing family's musical interests at home. By the early 1960s, the older boys Jackie, Tito and Jermaine had begun performing around the city; by 1964, Michael and Marlon had joined in. A musical prodigy, Michael's singing and dancing talents were amazingly mature, and he soon became the dominant voice and focus of the Jackson 5. An opening act for such soul groups as the O-Jays and James Brown, it was Gladys Knight (not Diana Ross) who officially brought the group to Berry Gordy's attention, and by 1969, the boys were producing back-to-back chart-busting hits as Motown artists (I Want You Back, ABC, Never Can Say Goodbye, Got to Be There, etc.). As a product of the 1970s, the boys emerged as one of the most accomplished black pop / soul vocal groups in music history, successfully evolving from a group like The Temptations to a disco phenomenon.Solo success for Michael was inevitable, and by the 1980s, he had become infinitely more popular than his brotherly group. Record sales consistently orbited, culminating in the biggest-selling album of all time, Thriller in 1982. A TV natural, he ventured rather uneasily into films, such as playing the Scarecrow in El mago (1978), but had much better luck with elaborate music videos.",
                  ""
                  ]      
      },
      songs: [
        "Wanna Be Startin' Somethin",
        "Baby Be Mine",
        "The Girl is Mine",
        "Thriller",
        "Beat It",
        "Billie Jean",
        "Human Nature",
        "P.Y.T. (Pretty Young Thing)",
        "The Lady in My Life"
      ]
    },
  ];
  
  cover=CaratulaPage;
  biografia=BiografiaPage;
  


  constructor(public navCtrl: NavController) {

  }

  
  clickCover(id: number){
    this.navCtrl.push(this.cover,this.discos[id]);
    console.log(id);
  }
  clickArtist(id: number){
    this.navCtrl.push(this.biografia,this.discos[id]);
  }
  clickTracks(id: number){
    this.navCtrl.push(this.tracks,this.discos[id]);
  }

}
