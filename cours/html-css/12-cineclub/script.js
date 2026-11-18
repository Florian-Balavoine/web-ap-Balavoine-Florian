// Colle ta clé TMDB (v3) entre les guillemets pour charger les vraies affiches : https://www.themoviedb.org/settings/api
const TMDB_KEY="";
/* ========== Données fictives ========== */
// 400 films : "Titre|année|réalisateur|genre" (une ligne par film). Les 12 premiers gardent leur numéro (critiques et listes).
// Note, popularité et couleur de secours sont calculées à partir du titre ; la note devient celle de TMDB si la clé est renseignée.
const RAW=`Cinema Paradiso|1988|Giuseppe Tornatore|Drame
Seven|1995|David Fincher|Thriller
Dune : Deuxième partie|2024|Denis Villeneuve|Science-fiction
Hérédité|2018|Ari Aster|Horreur
In the Mood for Love|2000|Wong Kar-wai|Romance
The Grand Budapest Hotel|2014|Wes Anderson|Comédie
Le Voyage de Chihiro|2001|Hayao Miyazaki|Animation
Shutter Island|2010|Martin Scorsese|Thriller
Moonlight|2016|Barry Jenkins|Drame
Blade Runner 2049|2017|Denis Villeneuve|Science-fiction
Shining|1980|Stanley Kubrick|Horreur
Les Évadés|1994|Frank Darabont|Drame
Le Parrain|1972|Francis Ford Coppola|Drame
La Liste de Schindler|1993|Steven Spielberg|Drame
Forrest Gump|1994|Robert Zemeckis|Drame
American Beauty|1999|Sam Mendes|Drame
Requiem for a Dream|2000|Darren Aronofsky|Drame
Whiplash|2014|Damien Chazelle|Drame
Birdman|2014|Alejandro G. Iñárritu|Drame
Boyhood|2014|Richard Linklater|Drame
Nomadland|2020|Chloé Zhao|Drame
The Father|2020|Florian Zeller|Drame
Manchester by the Sea|2016|Kenneth Lonergan|Drame
Mommy|2014|Xavier Dolan|Drame
La Haine|1995|Mathieu Kassovitz|Drame
Les 400 coups|1959|François Truffaut|Drame
Taxi Driver|1976|Martin Scorsese|Drame
Raging Bull|1980|Martin Scorsese|Drame
Apocalypse Now|1979|Francis Ford Coppola|Drame
Il était une fois en Amérique|1984|Sergio Leone|Drame
Le Pianiste|2002|Roman Polanski|Drame
Paris, Texas|1984|Wim Wenders|Drame
Citizen Kane|1941|Orson Welles|Drame
12 hommes en colère|1957|Sidney Lumet|Drame
Anora|2024|Sean Baker|Drame
The Brutalist|2024|Brady Corbet|Drame
Oppenheimer|2023|Christopher Nolan|Drame
Amour|2012|Michael Haneke|Drame
Un prophète|2009|Jacques Audiard|Drame
There Will Be Blood|2007|Paul Thomas Anderson|Drame
Fight Club|1999|David Fincher|Thriller
Le Silence des agneaux|1991|Jonathan Demme|Thriller
Usual Suspects|1995|Bryan Singer|Thriller
Memento|2000|Christopher Nolan|Thriller
Mulholland Drive|2001|David Lynch|Thriller
Old Boy|2003|Park Chan-wook|Thriller
Parasite|2019|Bong Joon-ho|Thriller
Prisoners|2013|Denis Villeneuve|Thriller
Gone Girl|2014|David Fincher|Thriller
Zodiac|2007|David Fincher|Thriller
Sueurs froides|1958|Alfred Hitchcock|Thriller
Psychose|1960|Alfred Hitchcock|Thriller
Fenêtre sur cour|1954|Alfred Hitchcock|Thriller
Heat|1995|Michael Mann|Thriller
No Country for Old Men|2007|Joel et Ethan Coen|Thriller
Sicario|2015|Denis Villeneuve|Thriller
Memories of Murder|2003|Bong Joon-ho|Thriller
Le Samouraï|1967|Jean-Pierre Melville|Thriller
Chinatown|1974|Roman Polanski|Thriller
Nightcrawler|2014|Dan Gilroy|Thriller
Blade Runner|1982|Ridley Scott|Science-fiction
2001 : l'Odyssée de l'espace|1968|Stanley Kubrick|Science-fiction
Matrix|1999|Lilly et Lana Wachowski|Science-fiction
Interstellar|2014|Christopher Nolan|Science-fiction
Inception|2010|Christopher Nolan|Science-fiction
Premier Contact|2016|Denis Villeneuve|Science-fiction
Dune|2021|Denis Villeneuve|Science-fiction
Alien|1979|Ridley Scott|Science-fiction
Terminator 2 : Le Jugement dernier|1991|James Cameron|Science-fiction
Solaris|1972|Andreï Tarkovski|Science-fiction
Ex Machina|2015|Alex Garland|Science-fiction
Her|2013|Spike Jonze|Science-fiction
Gravity|2013|Alfonso Cuarón|Science-fiction
Les Fils de l'homme|2006|Alfonso Cuarón|Science-fiction
Minority Report|2002|Steven Spielberg|Science-fiction
Eternal Sunshine of the Spotless Mind|2004|Michel Gondry|Science-fiction
L'Exorciste|1973|William Friedkin|Horreur
Halloween|1978|John Carpenter|Horreur
The Thing|1982|John Carpenter|Horreur
Rosemary's Baby|1968|Roman Polanski|Horreur
Get Out|2017|Jordan Peele|Horreur
Midsommar|2019|Ari Aster|Horreur
The Witch|2015|Robert Eggers|Horreur
It Follows|2014|David Robert Mitchell|Horreur
Conjuring|2013|James Wan|Horreur
Evil Dead|1981|Sam Raimi|Horreur
Massacre à la tronçonneuse|1974|Tobe Hooper|Horreur
Ring|1998|Hideo Nakata|Horreur
Les Autres|2001|Alejandro Amenábar|Horreur
Le Labyrinthe de Pan|2006|Guillermo del Toro|Horreur
Nosferatu|1922|F. W. Murnau|Horreur
Sinners|2025|Ryan Coogler|Horreur
Casablanca|1942|Michael Curtiz|Romance
Titanic|1997|James Cameron|Romance
Before Sunrise|1995|Richard Linklater|Romance
Lost in Translation|2003|Sofia Coppola|Romance
La La Land|2016|Damien Chazelle|Romance
Portrait de la jeune fille en feu|2019|Céline Sciamma|Romance
Call Me by Your Name|2017|Luca Guadagnino|Romance
Carol|2015|Todd Haynes|Romance
Brokeback Mountain|2005|Ang Lee|Romance
Les Parapluies de Cherbourg|1964|Jacques Demy|Romance
Vacances romaines|1953|William Wyler|Romance
Past Lives|2023|Celine Song|Romance
Intouchables|2011|Olivier Nakache et Éric Toledano|Comédie
Les Tontons flingueurs|1963|Georges Lautner|Comédie
Le Dîner de cons|1998|Francis Veber|Comédie
Le Fabuleux Destin d'Amélie Poulain|2001|Jean-Pierre Jeunet|Comédie
The Big Lebowski|1998|Joel et Ethan Coen|Comédie
Dr Folamour|1964|Stanley Kubrick|Comédie
Mon oncle|1958|Jacques Tati|Comédie
Little Miss Sunshine|2006|Jonathan Dayton et Valerie Faris|Comédie
Moonrise Kingdom|2012|Wes Anderson|Comédie
Bienvenue chez les Ch'tis|2008|Dany Boon|Comédie
Jojo Rabbit|2019|Taika Waititi|Comédie
Chantons sous la pluie|1952|Stanley Donen|Comédie
Certains l'aiment chaud|1959|Billy Wilder|Comédie
La Famille Tenenbaum|2001|Wes Anderson|Comédie
La Folle Journée de Ferris Bueller|1986|John Hughes|Comédie
Les Visiteurs|1993|Jean-Marie Poiré|Comédie
Toy Story|1995|John Lasseter|Animation
Le Roi lion|1994|Roger Allers et Rob Minkoff|Animation
Princesse Mononoké|1997|Hayao Miyazaki|Animation
Le Château ambulant|2004|Hayao Miyazaki|Animation
Mon voisin Totoro|1988|Hayao Miyazaki|Animation
Le Tombeau des lucioles|1988|Isao Takahata|Animation
WALL-E|2008|Andrew Stanton|Animation
Là-haut|2009|Pete Docter|Animation
Vice-Versa|2015|Pete Docter|Animation
Coco|2017|Lee Unkrich|Animation
Spider-Man : New Generation|2018|Bob Persichetti, Peter Ramsey et Rodney Rothman|Animation
Persepolis|2007|Marjane Satrapi et Vincent Paronnaud|Animation
Your Name|2016|Makoto Shinkai|Animation
Flow|2024|Gints Zilbalodis|Animation
Mad Max : Fury Road|2015|George Miller|Action
Piège de cristal|1988|John McTiernan|Action
Le Seigneur des anneaux : La Communauté de l'anneau|2001|Peter Jackson|Action
Gladiator|2000|Ridley Scott|Action
The Dark Knight|2008|Christopher Nolan|Action
Les Sept Samouraïs|1954|Akira Kurosawa|Action
Léon|1994|Luc Besson|Action
Kill Bill : Volume 1|2003|Quentin Tarantino|Action
Pulp Fiction|1994|Quentin Tarantino|Action
Les Aventuriers de l'arche perdue|1981|Steven Spielberg|Action
Top Gun : Maverick|2022|Joseph Kosinski|Action
John Wick|2014|Chad Stahelski|Action
Casino Royale|2006|Martin Campbell|Action
Mission: Impossible - Fallout|2018|Christopher McQuarrie|Action
Le Bon, la Brute et le Truand|1966|Sergio Leone|Action
Les Dents de la mer|1975|Steven Spielberg|Action
Voleurs de bicyclette|1948|Vittorio De Sica|Drame
La Strada|1954|Federico Fellini|Drame
8½|1963|Federico Fellini|Drame
La Dolce Vita|1960|Federico Fellini|Drame
Le Septième Sceau|1957|Ingmar Bergman|Drame
Fanny et Alexandre|1982|Ingmar Bergman|Drame
Persona|1966|Ingmar Bergman|Drame
Les Contes de la lune vague après la pluie|1953|Kenji Mizoguchi|Drame
Voyage à Tokyo|1953|Yasujirō Ozu|Drame
Rashōmon|1950|Akira Kurosawa|Drame
Ikiru|1952|Akira Kurosawa|Drame
Stalker|1979|Andreï Tarkovski|Drame
Les Enfants du paradis|1945|Marcel Carné|Drame
La Grande Illusion|1937|Jean Renoir|Drame
Pierrot le fou|1965|Jean-Luc Godard|Drame
À bout de souffle|1960|Jean-Luc Godard|Drame
Jules et Jim|1962|François Truffaut|Drame
Le Mépris|1963|Jean-Luc Godard|Drame
Pather Panchali|1955|Satyajit Ray|Drame
Barry Lyndon|1975|Stanley Kubrick|Drame
Orange mécanique|1971|Stanley Kubrick|Drame
Vol au-dessus d'un nid de coucou|1975|Miloš Forman|Drame
Amadeus|1984|Miloš Forman|Drame
Les Affranchis|1990|Martin Scorsese|Drame
Le Parrain, 2e partie|1974|Francis Ford Coppola|Drame
Rocky|1976|John G. Avildsen|Drame
Philadelphia|1993|Jonathan Demme|Drame
Million Dollar Baby|2004|Clint Eastwood|Drame
Gran Torino|2008|Clint Eastwood|Drame
Le Discours d'un roi|2010|Tom Hooper|Drame
12 Years a Slave|2013|Steve McQueen|Drame
Spotlight|2015|Tom McCarthy|Drame
Joker|2019|Todd Phillips|Drame
Marriage Story|2019|Noah Baumbach|Drame
Roma|2018|Alfonso Cuarón|Drame
Drive My Car|2021|Ryusuke Hamaguchi|Drame
Anatomie d'une chute|2023|Justine Triet|Drame
Aftersun|2022|Charlotte Wells|Drame
Tár|2022|Todd Field|Drame
The Fabelmans|2022|Steven Spielberg|Drame
Le Fils de Saul|2015|László Nemes|Drame
Mustang|2015|Deniz Gamze Ergüven|Drame
Les Misérables|2019|Ladj Ly|Drame
Jeanne Dielman|1975|Chantal Akerman|Drame
Cléo de 5 à 7|1962|Agnès Varda|Drame
Moi, Daniel Blake|2016|Ken Loach|Drame
Retour à Séoul|2022|Davy Chou|Drame
Une femme sous influence|1974|John Cassavetes|Drame
Magnolia|1999|Paul Thomas Anderson|Drame
Lady Bird|2017|Greta Gerwig|Drame
Boyz n the Hood|1991|John Singleton|Drame
Fargo|1996|Joel et Ethan Coen|Thriller
Les Infiltrés|2006|Martin Scorsese|Thriller
La Mort aux trousses|1959|Alfred Hitchcock|Thriller
Les Oiseaux|1963|Alfred Hitchcock|Thriller
Rebecca|1940|Alfred Hitchcock|Thriller
M le maudit|1931|Fritz Lang|Thriller
Le Troisième Homme|1949|Carol Reed|Thriller
Le Salaire de la peur|1953|Henri-Georges Clouzot|Thriller
Les Diaboliques|1955|Henri-Georges Clouzot|Thriller
Le Cercle rouge|1970|Jean-Pierre Melville|Thriller
Conversation secrète|1974|Francis Ford Coppola|Thriller
Les Hommes du président|1976|Alan J. Pakula|Thriller
Network|1976|Sidney Lumet|Thriller
Un après-midi de chien|1975|Sidney Lumet|Thriller
Black Swan|2010|Darren Aronofsky|Thriller
Drive|2011|Nicolas Winding Refn|Thriller
Enemy|2013|Denis Villeneuve|Thriller
Incendies|2010|Denis Villeneuve|Thriller
Wind River|2017|Taylor Sheridan|Thriller
Mystic River|2003|Clint Eastwood|Thriller
L.A. Confidential|1997|Curtis Hanson|Thriller
Le Prestige|2006|Christopher Nolan|Thriller
Mademoiselle|2016|Park Chan-wook|Thriller
Decision to Leave|2022|Park Chan-wook|Thriller
Burning|2018|Lee Chang-dong|Thriller
The Chaser|2008|Na Hong-jin|Thriller
Cure|1997|Kiyoshi Kurosawa|Thriller
Blow Out|1981|Brian De Palma|Thriller
Les Trois Jours du Condor|1975|Sydney Pollack|Thriller
Marathon Man|1976|John Schlesinger|Thriller
Metropolis|1927|Fritz Lang|Science-fiction
Le Jour où la Terre s'arrêta|1951|Robert Wise|Science-fiction
La Planète des singes|1968|Franklin J. Schaffner|Science-fiction
Star Wars : Un nouvel espoir|1977|George Lucas|Science-fiction
L'Empire contre-attaque|1980|Irvin Kershner|Science-fiction
E.T. l'extra-terrestre|1982|Steven Spielberg|Science-fiction
Retour vers le futur|1985|Robert Zemeckis|Science-fiction
Aliens, le retour|1986|James Cameron|Science-fiction
RoboCop|1987|Paul Verhoeven|Science-fiction
Total Recall|1990|Paul Verhoeven|Science-fiction
Jurassic Park|1993|Steven Spielberg|Science-fiction
L'Armée des douze singes|1995|Terry Gilliam|Science-fiction
Bienvenue à Gattaca|1997|Andrew Niccol|Science-fiction
The Truman Show|1998|Peter Weir|Science-fiction
District 9|2009|Neill Blomkamp|Science-fiction
Moon|2009|Duncan Jones|Science-fiction
Edge of Tomorrow|2014|Doug Liman|Science-fiction
Annihilation|2018|Alex Garland|Science-fiction
Everything Everywhere All at Once|2022|Daniel Kwan et Daniel Scheinert|Science-fiction
La Jetée|1962|Chris Marker|Science-fiction
Les Griffes de la nuit|1984|Wes Craven|Horreur
Scream|1996|Wes Craven|Horreur
Carrie|1976|Brian De Palma|Horreur
Les Yeux sans visage|1960|Georges Franju|Horreur
Possession|1981|Andrzej Żuławski|Horreur
Les Innocents|1961|Jack Clayton|Horreur
La Maison du diable|1963|Robert Wise|Horreur
L'Au-delà|1981|Lucio Fulci|Horreur
Frankenstein|1931|James Whale|Horreur
Dracula|1992|Francis Ford Coppola|Horreur
Morse|2008|Tomas Alfredson|Horreur
REC|2007|Jaume Balagueró et Paco Plaza|Horreur
Le Projet Blair Witch|1999|Daniel Myrick et Eduardo Sánchez|Horreur
Saw|2004|James Wan|Horreur
Us|2019|Jordan Peele|Horreur
Barbarian|2022|Zach Cregger|Horreur
Mister Babadook|2014|Jennifer Kent|Horreur
Grave|2016|Julia Ducournau|Horreur
Titane|2021|Julia Ducournau|Horreur
Suspiria|1977|Dario Argento|Horreur
Un homme et une femme|1966|Claude Lelouch|Romance
Autant en emporte le vent|1939|Victor Fleming|Romance
Coup de foudre à Notting Hill|1999|Roger Michell|Romance
Quand Harry rencontre Sally|1989|Rob Reiner|Romance
Pretty Woman|1990|Garry Marshall|Romance
Ghost|1990|Jerry Zucker|Romance
Orgueil et Préjugés|2005|Joe Wright|Romance
Reviens-moi|2007|Joe Wright|Romance
Before Sunset|2004|Richard Linklater|Romance
Before Midnight|2013|Richard Linklater|Romance
Blue Valentine|2010|Derek Cianfrance|Romance
500 jours ensemble|2009|Marc Webb|Romance
N'oublie jamais|2004|Nick Cassavetes|Romance
Phantom Thread|2017|Paul Thomas Anderson|Romance
Les Amours imaginaires|2010|Xavier Dolan|Romance
Happy Together|1997|Wong Kar-wai|Romance
Chungking Express|1994|Wong Kar-wai|Romance
2046|2004|Wong Kar-wai|Romance
Hiroshima mon amour|1959|Alain Resnais|Romance
Cold War|2018|Paweł Pawlikowski|Romance
Les Temps modernes|1936|Charlie Chaplin|Comédie
Le Dictateur|1940|Charlie Chaplin|Comédie
Le Kid|1921|Charlie Chaplin|Comédie
Sherlock Jr.|1924|Buster Keaton|Comédie
Le Mécano de la General|1926|Buster Keaton|Comédie
Jour de fête|1949|Jacques Tati|Comédie
Playtime|1967|Jacques Tati|Comédie
La Grande Vadrouille|1966|Gérard Oury|Comédie
La Chèvre|1981|Francis Veber|Comédie
Le Père Noël est une ordure|1982|Jean-Marie Poiré|Comédie
Les Bronzés font du ski|1979|Patrice Leconte|Comédie
OSS 117 : Le Caire, nid d'espions|2006|Michel Hazanavicius|Comédie
Le Prénom|2012|Alexandre de La Patellière et Matthieu Delaporte|Comédie
Tanguy|2001|Étienne Chatiliez|Comédie
La Vie est un long fleuve tranquille|1988|Étienne Chatiliez|Comédie
La Cité de la peur|1994|Alain Berbérian|Comédie
Les Valseuses|1974|Bertrand Blier|Comédie
SOS Fantômes|1984|Ivan Reitman|Comédie
Un jour sans fin|1993|Harold Ramis|Comédie
Madame Doubtfire|1993|Chris Columbus|Comédie
Maman, j'ai raté l'avion|1990|Chris Columbus|Comédie
Superbad|2007|Greg Mottola|Comédie
Very Bad Trip|2009|Todd Phillips|Comédie
Y a-t-il un pilote dans l'avion ?|1980|Jim Abrahams, David Zucker et Jerry Zucker|Comédie
Monty Python : Sacré Graal !|1975|Terry Gilliam et Terry Jones|Comédie
La Vie de Brian|1979|Terry Jones|Comédie
Blanche-Neige et les Sept Nains|1937|David Hand|Animation
Bambi|1942|David Hand|Animation
Fantasia|1940|Ben Sharpsteen|Animation
Le Livre de la jungle|1967|Wolfgang Reitherman|Animation
La Belle et la Bête|1991|Gary Trousdale et Kirk Wise|Animation
Aladdin|1992|Ron Clements et John Musker|Animation
Les Indestructibles|2004|Brad Bird|Animation
Ratatouille|2007|Brad Bird|Animation
Le Monde de Nemo|2003|Andrew Stanton|Animation
Monstres et Cie|2001|Pete Docter|Animation
Shrek|2001|Andrew Adamson et Vicky Jenson|Animation
Kirikou et la Sorcière|1998|Michel Ocelot|Animation
Akira|1988|Katsuhiro Otomo|Animation
Ghost in the Shell|1995|Mamoru Oshii|Animation
Les Triplettes de Belleville|2003|Sylvain Chomet|Animation
Le Garçon et le Héron|2023|Hayao Miyazaki|Animation
Terminator|1984|James Cameron|Action
Predator|1987|John McTiernan|Action
Mad Max 2 : Le Défi|1981|George Miller|Action
Speed|1994|Jan de Bont|Action
Mission: Impossible|1996|Brian De Palma|Action
La Mémoire dans la peau|2002|Doug Liman|Action
Skyfall|2012|Sam Mendes|Action
Le Seigneur des anneaux : Le Retour du roi|2003|Peter Jackson|Action
Le Seigneur des anneaux : Les Deux Tours|2002|Peter Jackson|Action
Pirates des Caraïbes : La Malédiction du Black Pearl|2003|Gore Verbinski|Action
Spider-Man 2|2004|Sam Raimi|Action
Avengers|2012|Joss Whedon|Action
Black Panther|2018|Ryan Coogler|Action
Logan|2017|James Mangold|Action
The Raid|2011|Gareth Evans|Action
Hero|2002|Zhang Yimou|Action
Tigre et Dragon|2000|Ang Lee|Action
Opération Dragon|1973|Robert Clouse|Action
Volte/Face|1997|John Woo|Action
The Killer|1989|John Woo|Action
Police Story|1985|Jackie Chan|Action
Le Magicien d'Oz|1939|Victor Fleming|Fantastique
Harry Potter à l'école des sorciers|2001|Chris Columbus|Fantastique
Edward aux mains d'argent|1990|Tim Burton|Fantastique
Beetlejuice|1988|Tim Burton|Fantastique
Big Fish|2003|Tim Burton|Fantastique
La Forme de l'eau|2017|Guillermo del Toro|Fantastique
Donnie Darko|2001|Richard Kelly|Fantastique
Orphée|1950|Jean Cocteau|Fantastique
La Belle et la Bête (1946)|1946|Jean Cocteau|Fantastique
Les Ailes du désir|1987|Wim Wenders|Fantastique
Princess Bride|1987|Rob Reiner|Fantastique
L'Histoire sans fin|1984|Wolfgang Petersen|Fantastique
Hugo Cabret|2011|Martin Scorsese|Fantastique
Midnight in Paris|2011|Woody Allen|Fantastique
Le Cabinet du docteur Caligari|1920|Robert Wiene|Fantastique
Dark City|1998|Alex Proyas|Fantastique
La Prisonnière du désert|1956|John Ford|Western
La Chevauchée fantastique|1939|John Ford|Western
Rio Bravo|1959|Howard Hawks|Western
Il était une fois dans l'Ouest|1968|Sergio Leone|Western
Impitoyable|1992|Clint Eastwood|Western
Josey Wales hors-la-loi|1976|Clint Eastwood|Western
Butch Cassidy et le Kid|1969|George Roy Hill|Western
La Horde sauvage|1969|Sam Peckinpah|Western
Django Unchained|2012|Quentin Tarantino|Western
True Grit|2010|Joel et Ethan Coen|Western
Le Train sifflera trois fois|1952|Fred Zinnemann|Western
L'Assassinat de Jesse James par le lâche Robert Ford|2007|Andrew Dominik|Western
Les Sept Mercenaires|1960|John Sturges|Western
Voyage au bout de l'enfer|1978|Michael Cimino|Guerre
Full Metal Jacket|1987|Stanley Kubrick|Guerre
Platoon|1986|Oliver Stone|Guerre
Il faut sauver le soldat Ryan|1998|Steven Spielberg|Guerre
Le Pont de la rivière Kwaï|1957|David Lean|Guerre
Lawrence d'Arabie|1962|David Lean|Guerre
Les Sentiers de la gloire|1957|Stanley Kubrick|Guerre
Dunkerque|2017|Christopher Nolan|Guerre
1917|2019|Sam Mendes|Guerre
Démineurs|2008|Kathryn Bigelow|Guerre
Das Boot|1981|Wolfgang Petersen|Guerre
La Ligne rouge|1998|Terrence Malick|Guerre
La Chute|2004|Oliver Hirschbiegel|Guerre
Requiem pour un massacre|1985|Elem Klimov|Guerre
Joyeux Noël|2005|Christian Carion|Guerre
Inglourious Basterds|2009|Quentin Tarantino|Guerre
La Bataille d'Alger|1966|Gillo Pontecorvo|Guerre`;
const hs=s=>[...s].reduce((a,c)=>(a*31+c.charCodeAt(0))>>>0,7);
const FILMS=RAW.split("\n").map((l,i)=>{const [t,y,dir,g]=l.split("|"),k=hs(t);
 return {id:i+1,t,y:+y,dir,g,r:3.4+k%15/10,pop:50+hs(t+"p")%50,h:k%360,min:0,syn:`${g} de ${dir}, sorti en ${y}.`}});
const REVIEWS=[
{u:"Camille_R",f:1,s:5,l:241,x:"Une déclaration d'amour à la salle obscure. La dernière scène m'a laissé muet dans le noir."},
{u:"Noé.cine",f:2,s:4,l:118,x:"Tendu de bout en bout, avec un montage au cordeau. Le final divise, moi j'ai adoré."},
{u:"LaCinéphile",f:7,s:5,l:326,x:"Chaque plan est un tableau. Un film d'animation qui s'adresse aux adultes autant qu'aux enfants."},
{u:"Marcus_B",f:3,s:3,l:64,x:"Visuellement splendide, scénario un peu en dessous. Reste une expérience de salle."}];
const LISTS=[
{n:"Les meilleurs films de tous les temps",d:"Le consensus de la communauté.",by:"Camille_R",ids:[12,5,1,8]},
{n:"Les classiques du cinéma",d:"À voir avant d'avoir 30 ans.",by:"Marcus_B",ids:[11,12,1]},
{n:"Thrillers psychologiques",d:"Pour ne plus dormir.",by:"Noé.cine",ids:[8,2,4]},
{n:"Pépites du cinéma indépendant",d:"Petits budgets, grandes idées.",by:"LaCinéphile",ids:[9,5,6]}];
const MEMBERS=[["Camille_R","412 films"],["Noé.cine","287 films"],["LaCinéphile","936 films"],["Marcus_B","154 films"]];
const GENRES=["Tous","Action","Fantastique","Western","Guerre","Drame","Thriller","Science-fiction","Horreur","Romance","Comédie","Animation"];
/* Images locales : essaie jpg, png, webp puis jpeg avant d'abandonner (affiche colorée de secours) */
const EXT=["jpg","png","webp","jpeg"];
function nx(el){const i=+el.dataset.i+1;if(el.src.includes("/img/")&&i<EXT.length){el.dataset.i=i;el.src=`img/${el.dataset.n}.${EXT[i]}`}else el.remove()}
const $=(s,p=document)=>p.querySelector(s),fmt=n=>n.toFixed(1).replace(".",",");
const stars=n=>"★".repeat(n)+"☆".repeat(5-n);
const byId=id=>FILMS.find(f=>f.id===id);
/* État utilisateur (conservé dans le navigateur) */
let me=JSON.parse(localStorage.getItem("cc-me")||'{"list":[],"seen":[],"fav":[]}');
const save=()=>localStorage.setItem("cc-me",JSON.stringify(me));
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("show"),2200)}
/* ========== Composants ========== */
const poster=f=>`<div class="poster" style="--h:${f.h}"><img src="${f.img||`img/${f.id}.jpg`}" data-n="${f.id}" data-i="0" alt="" loading="lazy" onerror="nx(this)"><b>${f.t}</b><small>${f.dir}</small></div>`;
const card=f=>`<article class="card"><button data-film="${f.id}" aria-label="${f.t}, ${f.y}">
 <div class="poster" style="--h:${f.h}"><img src="${f.img||`img/${f.id}.jpg`}" data-n="${f.id}" data-i="0" alt="" loading="lazy" onerror="nx(this)"><b>${f.t}</b><small>${f.dir}</small>
 <div class="over"><b style="font-size:1rem">${f.g}</b><p>${f.syn}</p><span>${f.y}</span></div></div>
 <div class="meta"><span>${f.t.length>20?f.t.slice(0,19)+"…":f.t} <span class="muted">${f.y}</span></span><span>★ ${fmt(f.r)}</span></div></button></article>`;
const rail=(id,arr)=>$(id).innerHTML=arr.map(card).join("");
/* ========== Accueil ========== */
$("#reviews").innerHTML=REVIEWS.map((v,i)=>{const f=byId(v.f);return `<article class="rev"><div class="who"><span class="av" style="--h:${i*70+90}">${v.u[0]}</span><b>${v.u}</b></div>
 <h3>${f.t} <span class="muted">${f.y}</span></h3><span class="stars" aria-label="${v.s} étoiles sur 5">${stars(v.s)}</span><p>« ${v.x} »</p>
 <button class="like" data-like="${i}">♥ <span>${v.l}</span></button></article>`}).join("");
$("#lists").innerHTML=LISTS.map((l,i)=>`<a class="list" href="#films" data-list="${i}"><div class="covers">${l.ids.map(id=>`<i style="--h:${byId(id).h}"></i>`).join("")}</div>
 <h3>${l.n}</h3><span class="muted">${l.d}<br>par ${l.by} · ${l.ids.length} films</span></a>`).join("");
$("#members").innerHTML=MEMBERS.map((m,i)=>`<div class="mem"><span class="av" style="--h:${i*70+90}">${m[0][0]}</span><div><b>${m[0]}</b><small>${m[1]}</small></div><button class="btn" data-follow>Suivre</button></div>`).join("");
/* ========== Explorer : filtres ========== */
const F={g:"Tous",q:"",year:"",rate:0,sort:"pop"};
$("#chips").innerHTML=GENRES.map(g=>`<button class="chip${g=="Tous"?" on":""}">${g}</button>`).join("");
function renderGrid(){
 let a=FILMS.filter(f=>(F.g=="Tous"||f.g==F.g)&&f.r>=F.rate&&(`${f.t} ${f.dir}`).toLowerCase().includes(F.q.toLowerCase()));
 if(F.year!=="")a=a.filter(f=>F.year==="0"?f.y<1990:F.year>=2020?f.y>=2020:f.y>=+F.year&&f.y<+F.year+10);
 a.sort((x,y)=>F.sort=="date"?y.y-x.y:F.sort=="note"?y.r-x.r:y.pop-x.pop);
 $("#grid").innerHTML=a.map(card).join("");$("#empty").hidden=!!a.length;
 $("#count").textContent=a.length+" film"+(a.length>1?"s":"");
}
$("#chips").onclick=e=>{if(!e.target.matches(".chip"))return;$(".chip.on").classList.remove("on");e.target.classList.add("on");F.g=e.target.textContent;renderGrid()};
$("#f-q").oninput=e=>{F.q=e.target.value;renderGrid()};
$("#f-year").onchange=e=>{F.year=e.target.value;renderGrid()};
$("#f-rate").onchange=e=>{F.rate=+e.target.value;renderGrid()};
$("#f-sort").onchange=e=>{F.sort=e.target.value;renderGrid()};
function renderAll(){
 rail("#r-pop",[...FILMS].sort((a,b)=>b.pop-a.pop).slice(0,8));
 rail("#r-top",[...FILMS].sort((a,b)=>b.r-a.r).slice(0,8));
 rail("#r-new",[...FILMS].sort((a,b)=>b.y-a.y).slice(0,8));
 renderGrid();
}
renderAll();
/* Récupère affiches, fonds et synopsis depuis TMDB */
async function loadTmdb(){
 if(!TMDB_KEY)return;
 await Promise.all(FILMS.map(async f=>{try{
  const u=`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=fr-FR&query=${encodeURIComponent(f.t)}&primary_release_year=${f.y}`;
  const m=(await(await fetch(u)).json()).results?.[0];if(!m)return;
  if(m.poster_path)f.img="https://image.tmdb.org/t/p/w500"+m.poster_path;
  if(m.backdrop_path)f.bd="https://image.tmdb.org/t/p/w1280"+m.backdrop_path;
  if(m.overview)f.syn=m.overview;
  if(m.vote_average)f.r=m.vote_average/2;
 }catch(e){}}));
 renderAll();
 const bd=byId(3).bd;if(bd)$(".hero-bg").style.setProperty("--hero",`url(${bd})`);
}
loadTmdb();
/* ========== Fiche film ========== */
function openFilm(id){
 const f=byId(id),dlg=$("#film-dlg"),sim=FILMS.filter(x=>x.g==f.g&&x.id!=id).slice(0,3);
 const btn=(k,on,off)=>`<button class="btn${me[k].includes(id)?" on":""}" data-act="${k}" data-id="${id}">${me[k].includes(id)?on:off}</button>`;
 dlg.innerHTML=`<div class="film">${poster(f)}<div><h3>${f.t}</h3><p class="muted">${f.y} · de ${f.dir} · ${f.g}</p>
 <p style="margin-top:1rem">${f.syn}</p><p class="stars" style="margin-top:.8rem">${stars(Math.round(f.r))} <span class="muted">${fmt(f.r)}/5</span></p>
 <div class="acts">${btn("seen","✓ Vu","Marquer comme vu")}${btn("fav","♥ Favori","Ajouter aux favoris")}${btn("list","✓ Dans ma liste","Ajouter à ma liste")}</div>
 <label class="muted" for="rv">Écrire une critique</label><textarea id="rv" rows="3" placeholder="Votre avis en quelques lignes"></textarea>
 <div class="acts"><button class="btn solid" id="pub">Publier</button><button class="btn" id="close">Fermer</button></div>
 ${sim.length?`<p class="muted">Films similaires : ${sim.map(s=>`<a href="#" data-film="${s.id}" style="color:var(--green)">${s.t}</a>`).join(", ")}</p>`:""}</div></div>`;
 if(!dlg.open)dlg.showModal();
}
/* ========== Événements globaux (délégation) ========== */
document.addEventListener("click",e=>{
 const t=e.target;
 const fb=t.closest("[data-film]");if(fb){e.preventDefault();openFilm(+fb.dataset.film);return}
 const act=t.closest("[data-act]");if(act){const k=act.dataset.act,id=+act.dataset.id,i=me[k].indexOf(id);i<0?me[k].push(id):me[k].splice(i,1);save();openFilm(id);toast(i<0?"Ajouté":"Retiré");return}
 if(t.id=="close")$("#film-dlg").close();
 if(t.id=="pub"){const v=$("#rv").value.trim();v?(toast("Critique publiée"),$("#film-dlg").close()):toast("Écrivez d'abord votre critique")}
 const lk=t.closest("[data-like]");if(lk){const on=lk.classList.toggle("on"),s=$("span",lk);s.textContent=+s.textContent+(on?1:-1)}
 const fo=t.closest("[data-follow]");if(fo){const on=fo.classList.toggle("on");fo.textContent=on?"Suivi":"Suivre"}
 const li=t.closest("[data-list]");if(li){const l=LISTS[li.dataset.list];F.q="";$("#f-q").value="";toast("Liste : "+l.n)}
 const au=t.closest("[data-auth]");if(au){const s=au.dataset.auth=="signup";$("#auth-t").textContent=s?"Rejoindre Cinéclub":"Connexion";$("#auth-ok").textContent=s?"Créer mon compte":"Se connecter";$("#auth-dlg").showModal()}
 if(t.matches("dialog"))t.close();
 if(!t.closest(".search"))$("#suggest").hidden=true;
});
$("#auth-ok").onclick=()=>toast("Démo : aucun compte réel n'est créé");
/* Recherche d'en-tête avec suggestions */
$("#q").oninput=e=>{const v=e.target.value.toLowerCase(),ul=$("#suggest");
 const r=v?FILMS.filter(f=>(f.t+f.dir).toLowerCase().includes(v)).slice(0,5):[];
 ul.hidden=!v;ul.innerHTML=r.length?r.map(f=>`<li data-film="${f.id}">${f.t} <span class="muted">${f.y}</span></li>`).join(""):`<li class="muted">Aucun résultat</li>`};
/* Navigation : fond au défilement + menu mobile */
const nav=$("#nav");addEventListener("scroll",()=>nav.classList.toggle("solid",scrollY>40),{passive:true});
$("#burger").onclick=()=>{$("#links").classList.toggle("open");nav.classList.toggle("open")};
$("#links").onclick=()=>{$("#links").classList.remove("open");nav.classList.remove("open")};
