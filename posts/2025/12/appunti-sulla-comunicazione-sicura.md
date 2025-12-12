---
layout: "base.njk"
title: >-
  Appunti sulla comunicazione sicura
excerpt: >-
  La comunicazione sicura è una sfida, ma essenziale per la privacy e per la propria sicurezza online.
date: "2025-12-12"
#img:
#  url: /assets/img/hi_emoji.webp
#  alt: "Emoji con un uomo che saluta"
draft: true
privacy: "public"
tags:
  - blog
categories: []
permalink: "{{ date | permalink: page.fileSlug }}"
keywords: []
---

<br>

**Nota**: alcune parole, come {% tooltip, "questa", "sì, questa!" %}, hanno la sottolineatura tratteggiata. Significa che ho inserito una spiegazione più approfondita. Vai sopra con il mouse, o se sei da telefono clicca sulla parola, per leggerla.

<br>

## Breve introduzione sugli algoritmi
Per la crittografia del dato, vengono usati degli algoritmi. Questi possono essere di due tipologie, ovvero a chiave simmetrica e a chiave asimmetrica.  
Gli algoritmi a chiave **simmetrica** utilizzano **una sola chiave**, condivisa tra mittente e destinatario/i. Questo può essere limitante, in quanto la chiave deve essere condivisa con un mezzo sicuro, che non può essere quindi internet (se non con particolari accortezze, come trasmettere la chiave con un algoritmo a chiave asimmetrica). Ha il vantaggio però di essere leggera computazionalmente.

Gli algoritmi a chiave **asimmetrica** invece fanno uso di **due chiavi**, una pubblica e una privata, per la criptazione e decriptazione dei dati. La **criptazione** avviene con la chiave **pubblica** del destinatario, posseduta dal mittente e potenzialmente da chiunque, e la **decriptazione** avviene con la chiave **privata**, posseduta unicamente dal destinatario.

Questo metodo è generalmente più sicuro, in quanto non c'è una chiave unica, e con la chiave pubblica non si può decriptare un messaggio che è stato precedentemente criptato con la stessa (ovvero inteso per essere letto solo dal vero destinatario). Ha lo svantaggio però di essere **più lento** della crittografia simmetrica, e quindi, come già detto prima, solitamente viene usato per trasmettere la chiave simmetrica tramite Internet.


## I software
La scelta dei software di comunicazione è molto importante, ma effettivamente non cruciale per la riuscita di una comunicazione sicura e segreta.

La {% tooltip, "*E2EE*", "crittografia end to end" %} è tra i modi migliori di garantire una comunicazione sicura, in quanto eliminano, nella teoria, il rischio di ogni intrusione da terzi. Rimane però la possibilità per il provider del servizio di inserire una *backdoor* nella crittografia, che può potenzialmente permettergli di visualizzare i contenuti trasmessi.

Per questo motivo, è molto importante scegliere un mezzo che renda disponibile il suo codice sorgente (in inglese, questa pratica si dice *open source*) e l'algoritmo di *E2EE*. Se questi dati sono pubblici, è molto più probabile che non ci siano *backdoor* o che, se presenti, vengano notate da sviluppatori esperti e rimosse. Qui vale il principio di *zero-trust*, ovvero che non è consentito fidarsi a prescindere del funzionamento di un software.

Una pratica che viene spesso effettuata su questo tipo di applicazioni e algoritmi è l'*audit* da parte di terzi, ed è preferibile utilizzare software che hanno superato audit. I risultati di queste analisi quando presenti vengono pubblicati su internet (e spesso pubblicizzati anche da chi ha creato il software, essendo quasi pubblicità gratuita per loro), quindi non è possibile sempre affermare con certezza che quel mezzo è il più sicuro. In ogni caso, non necessariamente un software di cui non è stato effettuato l'audit non è sicuro.

In alcuni software, la *E2EE* viene indicata anche con altri nomi: spesso viene utilizzato *PGP* per le email (in quanto **PGP** è la suite di crittografia utilizzata), e per applicazioni più commerciali vengono semplicemente chiamate "chat sicure/segrete". In questo caso è importante verificare che in queste chat venga effettivamente implementata la *E2EE*, e che questa non sia solo una *buzzword* per attirare utenti e investitori facendogli credere che la comunicazione sia sicura.

Al momento della stesura di questo testo, mi sento di consigliare:

Per le email:
-	[**Proton Mail**](https://proton.me), dotato di cifratura con PGP se la comunicazione avviene tra indirizzi di Proton Mail. La suite Proton include anche una VPN, un calendario e un drive, anche se alcune parti sono a pagamento (come l'uso di un dominio personalizzato per la mail)
-	**Tuta Mail**, con servizi molto simili a Proton Mail
-	Servizi self-hostati (ovvero installati su un server proprio, la complessità tecnica qui è maggiore) con supporto alla crittografia tramite *PGP* o altre suite analoghe

Per l'Instant Messaging:
-	Un'istanza del software [**Matrix**](https://matrix.org/), che implementa un alto grado di sicurezza, con verifica incrociata tra dispositivi
-	**Session**, che è open source, hostata in Svizzera, e che non mantiene log sul suo utilizzo
-	Per comunicazioni anche in caso di grande incertezza, come nel caso di disastri naturali, è utile avere installato anche Briar sul proprio dispositivo mobile principale, che permette di utilizzare anche la connessione bluetooth per comunicare. Non è pensato però per la comunicazione continua


## Il dato
Nel qual caso in cui il mezzo di comunicazione dovesse venire violato (ad es., viene scoperta una backdoor nel codice, l'algoritmo viene bucato), è cruciale che il dato che è stato trasmesso non sia visibile a chi ha violato il mezzo.

È ovviamente necessario adattare il grado di sicurezza dell'algoritmo al livello di confidenzialità dei dati, quindi i dati meno importanti possono essere tranquillamente trasmessi {% tooltip, "*in chiaro*", "senza crittografia (in questo caso, aggiuntiva al mezzo)"%}, in quanto quel dato da solo è poco utile ad un potenziale hacker/attaccante/avversario politico/governo.

Appena si sale di livello di importanza e confidenzialità del dato è però necessario prevedere delle **misure di sicurezza maggiori**. Questo si applica in particolare ai documenti, per i quali vale la pena spendere tempo in criptazione.

Il mio consiglio, in questo caso, è quello di cifrare, manualmente o con mezzi automatizzati installabili sui dispositivi, i documenti che vengono inviati in email sopra un certo grado di confidenzialità, ed inoltre anche i documenti che verranno trasmessi su qualsiasi altro mezzo. Infatti, anche se il documento dovesse essere trasmesso su mezzi non cifrati come, ad esempio, su *Telegram* o *Discord*, la crittografia effettuata direttamente sul documento garantirà la sua sicurezza. Ovviamente, se il mezzo è cifrato c'è un ulteriore livello di sicurezza, ma nella maggioranza dei casi è inutile e dispendioso applicare entrambi questi livelli.  


## L’infrastruttura
Questa sezione è dedicata all’infrastruttura di comunicazione. Si includono quindi tutte le parti fisiche legate alla trasmissione dei dati. Queste parti infatti difficilmente sono di nostra proprietà (al contrario dei punti precedenti), ma appartengono all’{% tooltip, "*ISP*", "Internet Service Provider" %} nel più banale caso della fornitura di connessione ad Internet.

Detto questo, si può dedurre che noi abbiamo un controllo quasi nullo sull’infrastruttura (a meno di essere in una singola casa/edificio, in cui abbiamo installato noi la rete e comunichiamo in locale senza interagire con Internet. Un caso piuttosto particolare, direi). Come per i livelli precedenti, però, abbiamo un certo livello di controllo su cosa viene trasmesso.

In questo caso, può rendersi utile l’uso di {% tooltip, "*VPN*", "Rete Privata Virtuale" %}, un termine che indica generalmente un collegamento privato tramite Internet, utilizzata spesso dalle aziende per lavoratori in smart working o in sedi diverse per fare in modo di avere, funzionalmente, una rete unica.

Qui, con *VPN*, intendo più nello specifico un software consumer (non di livello enterprise come il precedente) che permette di mascherare il proprio indirizzo IP fingendo quindi di essere in un altro luogo, o perfino in un altro stato. Meccanismo piuttosto utile per aggirare censure imposte a livello nazionale, geoblocking, o per nascondere all’ISP cosa realmente sta accadendo sulla connessione.

Questa ultima parte è ciò a cui volevo arrivare: se viene utilizzata una *VPN*, chi gestisce l’infrastruttura che fornisce la connessione non saprà con certezza cosa accade: vedrà solamente dati trasmessi verso la *VPN*, e non più le vere connessioni che il dispositivo instaura. In verità, l’*ISP* non le vede più perché effettivamente le connessioni vengono instaurate direttamente dalla *VPN* e non dal dispositivo.

Ciò quindi significa che il destinatario della mia fiducia riguardo alla segretezza della comunicazione non è scomparso, ma è solamente stato spostato dall’ISP al gestore della *VPN*. Che, nel caso di *ISP* (italiani e non) noti per dare informazioni sulla connessione di un utente a terzi senza legittimo motivo, non è necessariamente un male. È necessario però scegliere accuratamente la *VPN*, per evitare di riporre fiducia in provider che vendono i dati dei clienti o che, peggio, non assicurino una corretta cifratura dei dati in transito.

Al momento, mi sento di consigliare come *VPN* gratuita Proton VPN. Offre gratuitamente una connessione per account (scelta automaticamente tra 10 posizioni europee e extra-europee). Altre funzioni sono a pagamento, ma per un uso sporadico e non da power user è più che sufficiente.

## E poi?

Questo "articolo" (una serie di appunti personali uniti a consigli per il lettore, in verità) non sarà l'unico su questo blog dedicato a questi argomenti (generalmente, digital sovereignity, privacy, open source). Questa pertanto non è da considerarsi una guida completa all'uso sicuro di Internet e dei mezzi di comunicazione (e nemmeno punta ad esserlo). Se ti è piaciuto questo articolo, ti consiglio di controllare ogni tanto questo sito, o le mie pagine social elencate sul mio sito principale (link appena qui sotto).

E, se sei arrivatə a leggere fino a qui, grazie per l'attenzione! 🙃