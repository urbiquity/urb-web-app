import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  title = 'My first AGM project';
  lat = 7.109613;
  lng = 125.589775;

  private map: google.maps.Map = null;
  heatmap: google.maps.visualization.HeatmapLayer;
  coordArray: google.maps.LatLng[] = [];

  markers = [
    {lat: 7.109613, lng: 125.589775, alpha: 1},
  ];

  constructor() { }

  ngOnInit() {
  }

  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;
    // let this.coordArray: google.maps.LatLng[] = [];

    this.coordArray.push(new google.maps.LatLng(7.189113, 125.443981));
    this.coordArray.push(new google.maps.LatLng(7.109613, 125.589775));
this.coordArray.push(new google.maps.LatLng(7.109559768276725, 125.58968246378902));
this.coordArray.push(new google.maps.LatLng(7.10949589020067, 125.58960199751857));
this.coordArray.push(new google.maps.LatLng(7.10941870418023, 125.5895724932194));
this.coordArray.push(new google.maps.LatLng(7.109330871796374, 125.58951348462108));
this.coordArray.push(new google.maps.LatLng(7.109266993688474, 125.58941960730556));
this.coordArray.push(new google.maps.LatLng(7.109312240682488, 125.58925331034663));
this.coordArray.push(new google.maps.LatLng(7.109378780371469, 125.58915943303111));
this.coordArray.push(new google.maps.LatLng(7.109442658463822, 125.58905750908855));
this.coordArray.push(new google.maps.LatLng(7.109541137172128, 125.58893949189189));
this.coordArray.push(new google.maps.LatLng(7.109570414621887, 125.58885634341243));
this.coordArray.push(new google.maps.LatLng(7.109644939030991, 125.58875173726085));
this.coordArray.push(new google.maps.LatLng(7.109732771354812, 125.58864713110927));
this.coordArray.push(new google.maps.LatLng(7.109841896339783, 125.58856398262981));
this.coordArray.push(new google.maps.LatLng(7.109951021298826, 125.58847815194133));
this.coordArray.push(new google.maps.LatLng(7.110044176731158, 125.58838963904384));
this.coordArray.push(new google.maps.LatLng(7.10936547243445, 125.58964759507182));
this.coordArray.push(new google.maps.LatLng(7.109346841321965, 125.58969319262508));
this.coordArray.push(new google.maps.LatLng(7.109320225445678, 125.58979243435863));
this.coordArray.push(new google.maps.LatLng(7.109306917506956, 125.58987290062908));
this.coordArray.push(new google.maps.LatLng(7.109266993688474, 125.58998823561672));
this.coordArray.push(new google.maps.LatLng(7.109213761925125, 125.59011698164943));
this.coordArray.push(new google.maps.LatLng(7.109173838098539, 125.59023499884609));
this.coordArray.push(new google.maps.LatLng(7.109152545389618, 125.59033692278865));
this.coordArray.push(new google.maps.LatLng(7.109093990434999, 125.59049785532955));
this.coordArray.push(new google.maps.LatLng(7.109613000000012, 125.58992386260036));
this.coordArray.push(new google.maps.LatLng(7.109618323171995, 125.59002310433391));
this.coordArray.push(new google.maps.LatLng(7.1096422774451655, 125.5901303926945));
this.coordArray.push(new google.maps.LatLng(7.1095358139992415, 125.59015185036662));
this.coordArray.push(new google.maps.LatLng(7.109445320050805, 125.59026450314525));
this.coordArray.push(new google.maps.LatLng(7.109344179734409, 125.59033960499767));
this.coordArray.push(new google.maps.LatLng(7.109243039395737, 125.5904173890591));
this.coordArray.push(new google.maps.LatLng(7.1096688933028025, 125.59026450314525));
this.coordArray.push(new google.maps.LatLng(7.109738094525409, 125.59040129580501));
this.coordArray.push(new google.maps.LatLng(7.109767371962611, 125.59051663079265));
this.coordArray.push(new google.maps.LatLng(7.109820603661827, 125.5906507412434));
this.coordArray.push(new google.maps.LatLng(7.109889804861572, 125.5907768050671));
this.coordArray.push(new google.maps.LatLng(7.109932390210092, 125.59088409342769));
this.coordArray.push(new google.maps.LatLng(7.10972212501343, 125.59060514369014));
this.coordArray.push(new google.maps.LatLng(7.109639615859328, 125.59066683449748));
this.coordArray.push(new google.maps.LatLng(7.109575737794366, 125.59073925414089));
this.coordArray.push(new google.maps.LatLng(7.109519844480228, 125.59080094494823));
this.coordArray.push(new google.maps.LatLng(7.109397411482656, 125.59092969098094));
this.coordArray.push(new google.maps.LatLng(7.1094932286139665, 125.59084654250148));
this.coordArray.push(new google.maps.LatLng(7.109362810846997, 125.59093505539897));
this.coordArray.push(new google.maps.LatLng(7.109296271155701, 125.59101015725139));
this.coordArray.push(new google.maps.LatLng(7.109208438748436, 125.59111744561199));
this.coordArray.push(new google.maps.LatLng(7.109123267913244, 125.59117645421031));
this.coordArray.push(new google.maps.LatLng(7.109054066598019, 125.5912461916447));
this.coordArray.push(new google.maps.LatLng(7.109618323171995, 125.590398613596));
this.coordArray.push(new google.maps.LatLng(7.1095890457253015, 125.59043348231319));
this.coordArray.push(new google.maps.LatLng(7.1095091981339085, 125.59050053753856));
this.coordArray.push(new google.maps.LatLng(7.109421365767354, 125.59061855473522));
this.coordArray.push(new google.maps.LatLng(7.10936813402188, 125.59066683449748));
this.coordArray.push(new google.maps.LatLng(7.109298932743537, 125.59074461855892));
this.coordArray.push(new google.maps.LatLng(7.109251024160123, 125.59078753390315));
this.coordArray.push(new google.maps.LatLng(7.109205777160079, 125.59086531796459));
this.coordArray.push(new google.maps.LatLng(7.109133914268506, 125.59093505539897));
this.coordArray.push(new google.maps.LatLng(7.109040758651587, 125.59104234375957));
this.coordArray.push(new google.maps.LatLng(7.108939618246111, 125.59112817444804));
this.coordArray.push(new google.maps.LatLng(7.108851785770666, 125.59102625050548));
this.coordArray.push(new google.maps.LatLng(7.10888106326433, 125.59084654250148));
this.coordArray.push(new google.maps.LatLng(7.108966234144445, 125.59073120751384));
this.coordArray.push(new google.maps.LatLng(7.109027450704761, 125.59062123694423));
this.coordArray.push(new google.maps.LatLng(7.109115283146631, 125.59138030209544));
this.coordArray.push(new google.maps.LatLng(7.109205777160079, 125.59143931069377));
this.coordArray.push(new google.maps.LatLng(7.109309579094729, 125.59135616221431));
this.coordArray.push(new google.maps.LatLng(7.109410719418758, 125.59121936955455));
this.coordArray.push(new google.maps.LatLng(7.109578399380586, 125.59109867014888));
this.coordArray.push(new google.maps.LatLng(7.109682201231029, 125.59099138178829));
this.coordArray.push(new google.maps.LatLng(7.109793987812982, 125.59087604680064));
this.coordArray.push(new google.maps.LatLng(7.110009576144212, 125.59101015725139));
this.coordArray.push(new google.maps.LatLng(7.110076115732178, 125.59110671677593));
this.coordArray.push(new google.maps.LatLng(7.1101213626464865, 125.59123814501766));
this.coordArray.push(new google.maps.LatLng(7.110230487539145, 125.59143931069377));
this.coordArray.push(new google.maps.LatLng(7.110209194879204, 125.59159219660762));
this.coordArray.push(new google.maps.LatLng(7.110139993727561, 125.59170753159526));
this.coordArray.push(new google.maps.LatLng(7.110020222478928, 125.59184432425502));
this.coordArray.push(new google.maps.LatLng(7.109924405457538, 125.59190601506236));
this.coordArray.push(new google.maps.LatLng(7.109820603661827, 125.59201598563197));
this.coordArray.push(new google.maps.LatLng(7.1096688933028025, 125.59191799242024));
this.coordArray.push(new google.maps.LatLng(7.109557106690404, 125.59183216173176));
this.coordArray.push(new google.maps.LatLng(7.10949589020067, 125.59175169546131));
this.coordArray.push(new google.maps.LatLng(7.109392088308117, 125.59169000465397));
this.coordArray.push(new google.maps.LatLng(7.109333533384019, 125.59159612733845));
this.coordArray.push(new google.maps.LatLng(7.109485243853791, 125.59153980094914));
this.coordArray.push(new google.maps.LatLng(7.109618323171995, 125.5914432414246));
this.coordArray.push(new google.maps.LatLng(7.109690185987781, 125.59131181318287));
this.coordArray.push(new google.maps.LatLng(7.109817942077006, 125.59123402912144));
this.coordArray.push(new google.maps.LatLng(7.109916420704857, 125.59112405855183));

    this.heatmap = new google.maps.visualization.HeatmapLayer({
      map: this.map,
      data: this.coordArray
    });
  }

  public updateHeatMap() : void {
    console.log('wew');
    for(let x = 0; x < 11; x++){
        this.getHeatMapData(x);

        this.heatmap = new google.maps.visualization.HeatmapLayer({
          map: this.map,
          data: this.coordArray
        });
    }
  }

  async getHeatMapData(x: number){

    // await this.delay(3000);

    switch(x){
      case 0:

        this.coordArray.push(new google.maps.LatLng(7.113009667433604, 125.59467813604238));
        this.coordArray.push(new google.maps.LatLng(7.113068221888989, 125.59459766977193));
        this.coordArray.push(new google.maps.LatLng(7.113169361385299, 125.59449038141133));
        this.coordArray.push(new google.maps.LatLng(7.113291793377306, 125.5943938218868));
        this.coordArray.push(new google.maps.LatLng(7.113350347796726, 125.5942865335262));
        this.coordArray.push(new google.maps.LatLng(7.1131800076467595, 125.5942328893459));
        this.coordArray.push(new google.maps.LatLng(7.112120703420724, 125.5954156052278));
        this.coordArray.push(new google.maps.LatLng(7.1119077776531885, 125.59556580893263));
        this.coordArray.push(new google.maps.LatLng(7.11175340640998, 125.59575356356368));
        this.coordArray.push(new google.maps.LatLng(7.111455310069368, 125.59608615748152));
        this.coordArray.push(new google.maps.LatLng(7.11119979876627, 125.59614516607985));
        this.coordArray.push(new google.maps.LatLng(7.11110930514566, 125.59580184332594));
        this.coordArray.push(new google.maps.LatLng(7.111354170195552, 125.5956677328752));
        this.coordArray.push(new google.maps.LatLng(7.111481925821944, 125.59558726660475));
        this.coordArray.push(new google.maps.LatLng(7.111561773070384, 125.5953619610475));
        this.coordArray.push(new google.maps.LatLng(7.112003594260801, 125.59531904570));

        break;

      case 1:

          this.coordArray.push(new google.maps.LatLng(7.113227915820329, 125.59646944256883));
          this.coordArray.push(new google.maps.LatLng(7.113222592690177, 125.59652308674913));
          this.coordArray.push(new google.maps.LatLng(7.113355670925389, 125.59671084138017));
          this.coordArray.push(new google.maps.LatLng(7.113392932824341, 125.59676448556047));
          this.coordArray.push(new google.maps.LatLng(7.113323732152454, 125.5966089174376));
          this.coordArray.push(new google.maps.LatLng(7.113062898757007, 125.59655527325731));
          this.coordArray.push(new google.maps.LatLng(7.112993698035375, 125.59665183278184));
          this.coordArray.push(new google.maps.LatLng(7.112881912232263, 125.59667329045396));
          this.coordArray.push(new google.maps.LatLng(7.112956436104019, 125.59699556463124));
          this.coordArray.push(new google.maps.LatLng(7.11296708237043, 125.5968078100002));
          this.coordArray.push(new google.maps.LatLng(7.112956436104019, 125.59687754743459));
          this.coordArray.push(new google.maps.LatLng(7.112796742078281, 125.59674343698384));
          this.coordArray.push(new google.maps.LatLng(7.112668986817692, 125.5967541658199));
          this.coordArray.push(new google.maps.LatLng(7.112674309954256, 125.59690436952474));
          this.coordArray.push(new google.maps.LatLng(7.1126902793635916, 125.59701165788533));
          this.coordArray.push(new google.maps.LatLng(7.112557200935523, 125.59672734372975));
          this.coordArray.push(new google.maps.LatLng(7.1124294456082815, 125.59675953023793));
          this.coordArray.push(new google.maps.LatLng(7.112503969553497, 125.59699020021321));
          this.coordArray.push(new google.maps.LatLng(7.1132651777296365, 125.59607288473012));
          this.coordArray.push(new google.maps.LatLng(7.1131746845160615, 125.59584757917287));
          this.coordArray.push(new google.maps.LatLng(7.113073545020936, 125.59574029081227));
          this.coordArray.push(new google.maps.LatLng(7.112935143570473, 125.59559545152547));
          this.coordArray.push(new google.maps.LatLng(7.112802065213369, 125.59555253618123));
          this.coordArray.push(new google.maps.LatLng(7.112812711483355, 125.59497317903401));
          this.coordArray.push(new google.maps.LatLng(7.112674309954256, 125.59490344159963));

        break;

      case 2:

          this.coordArray.push(new google.maps.LatLng(7.114393679836217, 125.59492318783077));
          this.coordArray.push(new google.maps.LatLng(7.114755651622413, 125.59453694973263));
          this.coordArray.push(new google.maps.LatLng(7.114750328509984, 125.5947300687817));
          this.coordArray.push(new google.maps.LatLng(7.114771620959347, 125.5946227804211));
          this.coordArray.push(new google.maps.LatLng(7.114420295418455, 125.59508005829912));
          this.coordArray.push(new google.maps.LatLng(7.114303186845077, 125.59527317734819));
          this.coordArray.push(new google.maps.LatLng(7.114255278783718, 125.59544483872514));
          this.coordArray.push(new google.maps.LatLng(7.114281894373971, 125.59551457615953));
          this.coordArray.push(new google.maps.LatLng(7.114212693836087, 125.5956165001021));
          this.coordArray.push(new google.maps.LatLng(7.114186078241814, 125.59564332219225));
          this.coordArray.push(new google.maps.LatLng(7.114084938969504, 125.59574524613481));
          this.coordArray.push(new google.maps.LatLng(7.113946537823916, 125.59580425473314));
          this.coordArray.push(new google.maps.LatLng(7.113951860945672, 125.59589008542162));
          this.coordArray.push(new google.maps.LatLng(7.113845398498837, 125.59593836518388));
          this.coordArray.push(new google.maps.LatLng(7.1137602285235895, 125.59601883145433));
          this.coordArray.push(new google.maps.LatLng(7.113611181028885, 125.59614757748705));
          this.coordArray.push(new google.maps.LatLng(7.1135366572633965, 125.59620658608537));
          this.coordArray.push(new google.maps.LatLng(7.113419548464605, 125.59634069653612));
          this.coordArray.push(new google.maps.LatLng(7.113302439635943, 125.59636215420824));

        break;

      case 3:

          this.coordArray.push(new google.maps.LatLng(7.112195227416039, 125.5894933830532));
          this.coordArray.push(new google.maps.LatLng(7.11218458113174, 125.58952556956137));
          this.coordArray.push(new google.maps.LatLng(7.112152642277345, 125.58973478186454));
          this.coordArray.push(new google.maps.LatLng(7.112141995992042, 125.58988498556937));
          this.coordArray.push(new google.maps.LatLng(7.112078118275109, 125.58992790091361));
          this.coordArray.push(new google.maps.LatLng(7.111929070234379, 125.58998690951194));
          this.coordArray.push(new google.maps.LatLng(7.111950362814604, 125.58968650210227));
          this.coordArray.push(new google.maps.LatLng(7.112003594260801, 125.5895309339794));
          this.coordArray.push(new google.maps.LatLng(7.112110057134696, 125.58942901003684));
          this.coordArray.push(new google.maps.LatLng(7.112051502557101, 125.58931099284018));
          this.coordArray.push(new google.maps.LatLng(7.111987624827585, 125.58941828120078));
          this.coordArray.push(new google.maps.LatLng(7.111918423943912, 125.58973478186454));
          this.coordArray.push(new google.maps.LatLng(7.114372387369322, 125.59408633861813));
          this.coordArray.push(new google.maps.LatLng(7.114409649185745, 125.59420972023281));
          this.coordArray.push(new google.maps.LatLng(7.114404326069295, 125.59440820369991));
          this.coordArray.push(new google.maps.LatLng(7.114409649185745, 125.59448330555233));
          this.coordArray.push(new google.maps.LatLng(7.1144841728095205, 125.59457986507687));
          this.coordArray.push(new google.maps.LatLng(7.114500142155907, 125.59464960251125));
          this.coordArray.push(new google.maps.LatLng(7.1144628803468235, 125.5948212638882));

        break;

      case 4:

          this.coordArray.push(new google.maps.LatLng(7.114633414453909, 125.5903792692684));
          this.coordArray.push(new google.maps.LatLng(7.11454558306745, 125.59034708276022));
          this.coordArray.push(new google.maps.LatLng(7.114753184499276, 125.5902907563709));
          this.coordArray.push(new google.maps.LatLng(7.114811738732302, 125.59025588765371));
          this.coordArray.push(new google.maps.LatLng(7.114875616068904, 125.59020492568243));
          this.coordArray.push(new google.maps.LatLng(7.11508055579716, 125.59015128150213));
          this.coordArray.push(new google.maps.LatLng(7.1150645864709645, 125.59014859929312));
          this.coordArray.push(new google.maps.LatLng(7.115320095623296, 125.58997425570715));
          this.coordArray.push(new google.maps.LatLng(7.115213633493777, 125.59001180663336));
          this.coordArray.push(new google.maps.LatLng(7.11519234106491, 125.5899125648998));
          this.coordArray.push(new google.maps.LatLng(7.115107171339566, 125.58988306060064));
          this.coordArray.push(new google.maps.LatLng(7.114968770502173, 125.58986160292852));
          this.coordArray.push(new google.maps.LatLng(7.115000709160659, 125.58976504340399));
          this.coordArray.push(new google.maps.LatLng(7.115014016934374, 125.58958265319097));
          this.coordArray.push(new google.maps.LatLng(7.115003370715444, 125.58952632680166));
          this.coordArray.push(new google.maps.LatLng(7.114987401386563, 125.58965775504339));
          this.coordArray.push(new google.maps.LatLng(7.1135579497690555, 125.59002446043814));
          this.coordArray.push(new google.maps.LatLng(7.11341422533668, 125.59002446043814));
          this.coordArray.push(new google.maps.LatLng(7.113307762765166, 125.59007274020041));
          this.coordArray.push(new google.maps.LatLng(7.113126776336933, 125.59010492670859));
          this.coordArray.push(new google.maps.LatLng(7.112983051769588, 125.59012101996268));
          this.coordArray.push(new google.maps.LatLng(7.112839327157243, 125.59010492670859));
          this.coordArray.push(new google.maps.LatLng(7.112700925636172, 125.59010492670859));
          this.coordArray.push(new google.maps.LatLng(7.112503969553497, 125.59013174879874));
          this.coordArray.push(new google.maps.LatLng(7.112344275370386, 125.58984207022513));
          this.coordArray.push(new google.maps.LatLng(7.112280397681594, 125.58976160395468));
          this.coordArray.push(new google.maps.LatLng(7.112354921650981, 125.59000300276603));
          this.coordArray.push(new google.maps.LatLng(7.112259105116675, 125.5900512825283));

        break;

      case 5:

          this.coordArray.push(new google.maps.LatLng(7.114284750366177, 125.58813426032293));
          this.coordArray.push(new google.maps.LatLng(7.114353950893196, 125.58823350205648));
          this.coordArray.push(new google.maps.LatLng(7.114508321262057, 125.58827909960974));
          this.coordArray.push(new google.maps.LatLng(7.114681322475817, 125.58839175238836));
          this.coordArray.push(new google.maps.LatLng(7.114838354290304, 125.58838638797033));
          this.coordArray.push(new google.maps.LatLng(7.114931508731143, 125.5884534431957));
          this.coordArray.push(new google.maps.LatLng(7.114942154951741, 125.58883968129385));
          this.coordArray.push(new google.maps.LatLng(7.114918200955037, 125.58859828248251));
          this.coordArray.push(new google.maps.LatLng(7.114966108947212, 125.58893087640035));
          this.coordArray.push(new google.maps.LatLng(7.114987401386563, 125.5891722752117));
          this.coordArray.push(new google.maps.LatLng(7.114968770502173, 125.58898183837164));
          this.coordArray.push(new google.maps.LatLng(7.1149794167219325, 125.58872702851522));
          this.coordArray.push(new google.maps.LatLng(7.114375243360955, 125.58877530827749));
          this.coordArray.push(new google.maps.LatLng(7.114290073484013, 125.58870020642507));
          this.coordArray.push(new google.maps.LatLng(7.114199580472441, 125.58877530827749));
          this.coordArray.push(new google.maps.LatLng(7.114191595794095, 125.58883968129385));
          this.coordArray.push(new google.maps.LatLng(7.11413037992214, 125.58892819419134));
          this.coordArray.push(new google.maps.LatLng(7.114306042837142, 125.58907839789617));
          this.coordArray.push(new google.maps.LatLng(7.114380566477749, 125.58890941872824));
          this.coordArray.push(new google.maps.LatLng(7.114306042837142, 125.58892551198232));
          this.coordArray.push(new google.maps.LatLng(7.114263457894219, 125.5889925672077));
          this.coordArray.push(new google.maps.LatLng(7.114638737567701, 125.58965507283438));
          this.coordArray.push(new google.maps.LatLng(7.114590829541367, 125.58979454770315));
          this.coordArray.push(new google.maps.LatLng(7.114590829541367, 125.58997693791616));
          this.coordArray.push(new google.maps.LatLng(7.114588167984204, 125.5900386287235));
          this.coordArray.push(new google.maps.LatLng(7.114580183312602, 125.58989647164572));
          this.coordArray.push(new google.maps.LatLng(7.114590829541367, 125.59014323487509));
          this.coordArray.push(new google.maps.LatLng(7.114561552411698, 125.59024784102667));
          this.coordArray.push(new google.maps.LatLng(7.114558890854357, 125.59046241774786));

        break;

      case 6:

          this.coordArray.push(new google.maps.LatLng(7.1086230639406285, 125.58577415108437));
          this.coordArray.push(new google.maps.LatLng(7.108207855440854, 125.5862676775431));
          this.coordArray.push(new google.maps.LatLng(7.108521923443208, 125.58634277939552));
          this.coordArray.push(new google.maps.LatLng(7.108048159764104, 125.5861228382563));
          this.coordArray.push(new google.maps.LatLng(7.107776676986242, 125.58613356709236));
          this.coordArray.push(new google.maps.LatLng(7.1075743955965045, 125.58634277939552));
          this.coordArray.push(new google.maps.LatLng(7.107483901261745, 125.58644470333809));
          this.coordArray.push(new google.maps.LatLng(7.107292266141037, 125.58639642357582));
          this.coordArray.push(new google.maps.LatLng(7.1082823800710075, 125.58487292885536));
          this.coordArray.push(new google.maps.LatLng(7.108175916309941, 125.58494266628975));
          this.coordArray.push(new google.maps.LatLng(7.108048159764104, 125.5850606834864));
          this.coordArray.push(new google.maps.LatLng(7.107936372757354, 125.58521625160927));
          this.coordArray.push(new google.maps.LatLng(7.107797969758929, 125.58517870068306));
          this.coordArray.push(new google.maps.LatLng(7.107707475468201, 125.58491047978157));
          this.coordArray.push(new google.maps.LatLng(7.107707475468201, 125.58488902210945));
          this.coordArray.push(new google.maps.LatLng(7.107792646565852, 125.58471199631447));
          this.coordArray.push(new google.maps.LatLng(7.1077553842125765, 125.58452960610146));
          this.coordArray.push(new google.maps.LatLng(7.107648920329402, 125.5845188772654));
          this.coordArray.push(new google.maps.LatLng(7.107547779617536, 125.58443304657692));
          this.coordArray.push(new google.maps.LatLng(7.107356144523482, 125.58440622448677));
          this.coordArray.push(new google.maps.LatLng(7.10709530773928, 125.5841594612574));
          this.coordArray.push(new google.maps.LatLng(7.106855763623366, 125.58414873242134));
          this.coordArray.push(new google.maps.LatLng(7.106738653121248, 125.58412191033119));
          this.coordArray.push(new google.maps.LatLng(7.106456523152694, 125.58430966496223));
          this.coordArray.push(new google.maps.LatLng(7.106531048066885, 125.5841594612574));
          this.coordArray.push(new google.maps.LatLng(7.113305295634243, 125.58823350205648));
          this.coordArray.push(new google.maps.LatLng(7.1134410354093145, 125.58821204438436));
          this.coordArray.push(new google.maps.LatLng(7.11367259140359, 125.58824154868353));
          this.coordArray.push(new google.maps.LatLng(7.113787038576035, 125.58824154868353));
          this.coordArray.push(new google.maps.LatLng(7.113606052336739, 125.58823886647451));
          this.coordArray.push(new google.maps.LatLng(7.113480958864947, 125.58845880761373));
          this.coordArray.push(new google.maps.LatLng(7.113632667964625, 125.58840784564245));
          this.coordArray.push(new google.maps.LatLng(7.1137391304607975, 125.5884346677326));
          this.coordArray.push(new google.maps.LatLng(7.113856239178064, 125.58844003215063));
          this.coordArray.push(new google.maps.LatLng(7.113917455086571, 125.588147671368));
          this.coordArray.push(new google.maps.LatLng(7.1140771487225125, 125.58805379405248));
          this.coordArray.push(new google.maps.LatLng(7.1143326584244555, 125.5880564762615));
          this.coordArray.push(new google.maps.LatLng(7.114247488539613, 125.58805111184347));

        break;

      case 7:

          this.coordArray.push(new google.maps.LatLng(7.11175676083383, 125.59353653200469));
          this.coordArray.push(new google.maps.LatLng(7.111849915899903, 125.5936813712915));
          this.coordArray.push(new google.maps.LatLng(7.111945732519601, 125.59355262525878));
          this.coordArray.push(new google.maps.LatLng(7.112105426841309, 125.59368673570953));
          this.coordArray.push(new google.maps.LatLng(7.1120202565433, 125.59378329523406));
          this.coordArray.push(new google.maps.LatLng(7.111660944174733, 125.59278819568954));
          this.coordArray.push(new google.maps.LatLng(7.111695544637269, 125.59263262756667));
          this.coordArray.push(new google.maps.LatLng(7.111748776113006, 125.59253606804214));
          this.coordArray.push(new google.maps.LatLng(7.111865885337915, 125.59237245329223));
          this.coordArray.push(new google.maps.LatLng(7.112046872263128, 125.59236440666518));
          this.coordArray.push(new google.maps.LatLng(7.111724821949691, 125.59177700289092));
          this.coordArray.push(new google.maps.LatLng(7.111714175654478, 125.59199426182113));
          this.coordArray.push(new google.maps.LatLng(7.111722160375914, 125.59209082134566));
          this.coordArray.push(new google.maps.LatLng(7.111732806670936, 125.59221420296035));
          this.coordArray.push(new google.maps.LatLng(7.111724821949691, 125.59226784714065));
          this.coordArray.push(new google.maps.LatLng(7.111671590471167, 125.59234563120208));
          this.coordArray.push(new google.maps.LatLng(7.111631666858226, 125.59238049991927));
          this.coordArray.push(new google.maps.LatLng(7.11153585017302, 125.59241805084548));
          this.coordArray.push(new google.maps.LatLng(7.111503911273499, 125.59241805084548));
          this.coordArray.push(new google.maps.LatLng(7.1114054329860314, 125.59244219072662));
          this.coordArray.push(new google.maps.LatLng(7.111256384726962, 125.59248510607085));
          this.coordArray.push(new google.maps.LatLng(7.109730284772137, 125.58787163853401));
          this.coordArray.push(new google.maps.LatLng(7.109570589624593, 125.58774825691933));
          this.coordArray.push(new google.maps.LatLng(7.109426863944345, 125.58770534157509));
          this.coordArray.push(new google.maps.LatLng(7.109341693149636, 125.58776435017342));
          this.coordArray.push(new google.maps.LatLng(7.109080857492622, 125.58766779064888));
          this.coordArray.push(new google.maps.LatLng(7.109016979349954, 125.58746930718178));
          this.coordArray.push(new google.maps.LatLng(7.109086180670775, 125.5872922813868));
          this.coordArray.push(new google.maps.LatLng(7.109096827026889, 125.58714207768196));
          this.coordArray.push(new google.maps.LatLng(7.108990363454571, 125.58693822979683));
          this.coordArray.push(new google.maps.LatLng(7.108798728962201, 125.58688995003456));
          this.coordArray.push(new google.maps.LatLng(7.1086603262235375, 125.58679339051002));
          this.coordArray.push(new google.maps.LatLng(7.1086070943898845, 125.58644470333809));
          this.coordArray.push(new google.maps.LatLng(7.108591124838582, 125.58631059288734));
          this.coordArray.push(new google.maps.LatLng(7.108612417573534, 125.58594581246132));

        break;

      case 8:

          this.coordArray.push(new google.maps.LatLng(7.108057856202043, 125.5941703348542));
          this.coordArray.push(new google.maps.LatLng(7.108180289556599, 125.59440636924751));
          this.coordArray.push(new google.maps.LatLng(7.108308046065695, 125.59450829319007));
          this.coordArray.push(new google.maps.LatLng(7.108385232272731, 125.5946558146859));
          this.coordArray.push(new google.maps.LatLng(7.108446448910462, 125.59480870059974));
          this.coordArray.push(new google.maps.LatLng(7.108526296686569, 125.59492403558738));
          this.coordArray.push(new google.maps.LatLng(7.108523635094242, 125.59503668836601));
          this.coordArray.push(new google.maps.LatLng(7.10849968076274, 125.59523785404213));
          this.coordArray.push(new google.maps.LatLng(7.108417909812861, 125.59531780349516));
          this.coordArray.push(new google.maps.LatLng(7.1083034613024845, 125.59532048570418));
          this.coordArray.push(new google.maps.LatLng(7.108541700548158, 125.5953955875566));
          this.coordArray.push(new google.maps.LatLng(7.108624209899455, 125.59554310905241));
          this.coordArray.push(new google.maps.LatLng(7.108664133773787, 125.5956852661302));
          this.coordArray.push(new google.maps.LatLng(7.108738658329922, 125.59580596553587));
          this.coordArray.push(new google.maps.LatLng(7.110760893328519, 125.59342163831639));
          this.coordArray.push(new google.maps.LatLng(7.110891310698542, 125.59336799413609));
          this.coordArray.push(new google.maps.LatLng(7.1109844659401675, 125.59329289228367));
          this.coordArray.push(new google.maps.LatLng(7.111074959585371, 125.59324997693943));
          this.coordArray.push(new google.maps.LatLng(7.111146822173277, 125.59318560392308));
          this.coordArray.push(new google.maps.LatLng(7.111226669479971, 125.59307831556248));
          this.coordArray.push(new google.maps.LatLng(7.111319824653584, 125.59301662475514));
          this.coordArray.push(new google.maps.LatLng(7.111386364051734, 125.59292542964863));
          this.coordArray.push(new google.maps.LatLng(7.111551381717542, 125.59291201860356));
          this.coordArray.push(new google.maps.LatLng(7.111740353487815, 125.59293079406666));
          this.coordArray.push(new google.maps.LatLng(7.111884516348216, 125.59298936136565));
          this.coordArray.push(new google.maps.LatLng(7.11200162553852, 125.59302423008285));
          this.coordArray.push(new google.maps.LatLng(7.1121160731274395, 125.59308592089019));
          this.coordArray.push(new google.maps.LatLng(7.11196968667139, 125.59309933193526));
          this.coordArray.push(new google.maps.LatLng(7.111964363526658, 125.59317443378768));
          this.coordArray.push(new google.maps.LatLng(7.111903147357767, 125.59328976877532));
          this.coordArray.push(new google.maps.LatLng(7.111857900618985, 125.59337291725478));
          this.coordArray.push(new google.maps.LatLng(7.111783376568926, 125.59344265468917));

        break;

      case 9:
          this.coordArray.push(new google.maps.LatLng(7.109148354490063, 125.59267306341076));
          this.coordArray.push(new google.maps.LatLng(7.109108430657803, 125.592715978755));
          this.coordArray.push(new google.maps.LatLng(7.109073830000376, 125.59274816526317));
          this.coordArray.push(new google.maps.LatLng(7.109055198876071, 125.59276694072628));
          this.coordArray.push(new google.maps.LatLng(7.109036567750989, 125.59280180944347));
          this.coordArray.push(new google.maps.LatLng(7.109020598214623, 125.5928608180418));
          this.coordArray.push(new google.maps.LatLng(7.109105769068861, 125.59294128431225));
          this.coordArray.push(new google.maps.LatLng(7.10922021737937, 125.59305393709087));
          this.coordArray.push(new google.maps.LatLng(7.109313372959904, 125.59313440336132));
          this.coordArray.push(new google.maps.LatLng(7.109427821218699, 125.593257784976));
          this.coordArray.push(new google.maps.LatLng(7.109590178002018, 125.59339189542675));
          this.coordArray.push(new google.maps.LatLng(7.108871549181712, 125.59301638616466));
          this.coordArray.push(new google.maps.LatLng(7.10879702464714, 125.59311831010723));
          this.coordArray.push(new google.maps.LatLng(7.108733146465007, 125.59323632730388));
          this.coordArray.push(new google.maps.LatLng(7.108655960316417, 125.59327924264812));
          this.coordArray.push(new google.maps.LatLng(7.108443032942764, 125.59343749298));
          this.coordArray.push(new google.maps.LatLng(7.108416417014114, 125.59330070032024));
          this.coordArray.push(new google.maps.LatLng(7.1083099532841025, 125.59319072975063));
          this.coordArray.push(new google.maps.LatLng(7.108150257642845, 125.59305661929989));
          this.coordArray.push(new google.maps.LatLng(7.108030485875477, 125.59301906837368));
          this.coordArray.push(new google.maps.LatLng(7.107937330034825, 125.5930056573286));
          this.coordArray.push(new google.maps.LatLng(7.107857482156368, 125.59300297511959));
          this.coordArray.push(new google.maps.LatLng(7.1077669878773575, 125.5930056573286));
          this.coordArray.push(new google.maps.LatLng(7.107737710312677, 125.59294396652126));
          this.coordArray.push(new google.maps.LatLng(7.107671170386034, 125.59285277141475));
          this.coordArray.push(new google.maps.LatLng(7.108900826674142, 125.59344017518902));
          this.coordArray.push(new google.maps.LatLng(7.10895938165339, 125.59357965005779));
          this.coordArray.push(new google.maps.LatLng(7.1090232598040615, 125.59370303167248));
          this.coordArray.push(new google.maps.LatLng(7.109129723368774, 125.59386396421337));
          this.coordArray.push(new google.maps.LatLng(7.1083312460320816, 125.59351259483242));
          this.coordArray.push(new google.maps.LatLng(7.108203489529435, 125.59356892122173));
          this.coordArray.push(new google.maps.LatLng(7.110000739558557, 125.5948027607418));
          this.coordArray.push(new google.maps.LatLng(7.109915568870255, 125.5948027607418));
          this.coordArray.push(new google.maps.LatLng(7.109841044505029, 125.59476520981559));
          this.coordArray.push(new google.maps.LatLng(7.1097665201277165, 125.59471693005332));
          this.coordArray.push(new google.maps.LatLng(7.1096440871958935, 125.59466328587303));
          this.coordArray.push(new google.maps.LatLng(7.109596178648471, 125.59454526867637));
          this.coordArray.push(new google.maps.LatLng(7.108590174897456, 125.59391284278877));
          this.coordArray.push(new google.maps.LatLng(7.108624775591307, 125.59403354219444));
          this.coordArray.push(new google.maps.LatLng(7.1085342814634105, 125.59412473730094));
          this.coordArray.push(new google.maps.LatLng(7.108422494574941, 125.59412473730094));
          this.coordArray.push(new google.maps.LatLng(7.108185612745197, 125.59402817777641));
          this.coordArray.push(new google.maps.LatLng(7.108105764909894, 125.59398258022316));

        break;

      case 10:
          this.coordArray.push(new google.maps.LatLng(7.1100841004820845, 125.5913171776009));
          this.coordArray.push(new google.maps.LatLng(7.109974975554657, 125.59141105491642));
          this.coordArray.push(new google.maps.LatLng(7.109897789614724, 125.59148883897785));
          this.coordArray.push(new google.maps.LatLng(7.109793987812982, 125.59152907211308));
          this.coordArray.push(new google.maps.LatLng(7.109738094525409, 125.59161758501057));
          this.coordArray.push(new google.maps.LatLng(7.109650262202631, 125.59171682674412));
          this.coordArray.push(new google.maps.LatLng(7.108686502826737, 125.5913775366298));
          this.coordArray.push(new google.maps.LatLng(7.108814259195088, 125.59145532069124));
          this.coordArray.push(new google.maps.LatLng(7.108915399628146, 125.59158674893297));
          this.coordArray.push(new google.maps.LatLng(7.109072433414324, 125.591771821355));
          this.coordArray.push(new google.maps.LatLng(7.109019201628406, 125.59167794403947));
          this.coordArray.push(new google.maps.LatLng(7.109189543321615, 125.59188447413362));
          this.coordArray.push(new google.maps.LatLng(7.109234790323249, 125.59194616494096));
          this.coordArray.push(new google.maps.LatLng(7.10932528431316, 125.59202126679338));
          this.coordArray.push(new google.maps.LatLng(7.109503610652858, 125.5921687882892));
          this.coordArray.push(new google.maps.LatLng(7.109439732568978, 125.59212050852693));
          this.coordArray.push(new google.maps.LatLng(7.111099862491696, 125.5905632055194));
          this.coordArray.push(new google.maps.LatLng(7.111030661474248, 125.59060075644561));
          this.coordArray.push(new google.maps.LatLng(7.110948152555201, 125.59065440062591));
          this.coordArray.push(new google.maps.LatLng(7.11085499730621, 125.59073218468734));
          this.coordArray.push(new google.maps.LatLng(7.110775149934885, 125.5907965577037));
          this.coordArray.push(new google.maps.LatLng(7.110674009911292, 125.59082874421188));
          this.coordArray.push(new google.maps.LatLng(7.11051697667264, 125.59069463376113));
          this.coordArray.push(new google.maps.LatLng(7.110431806080048, 125.59061953190871));
          this.coordArray.push(new google.maps.LatLng(7.110612793570408, 125.59083142642089));
          this.coordArray.push(new google.maps.LatLng(7.110708610448202, 125.59097090128967));
          this.coordArray.push(new google.maps.LatLng(7.110807088885092, 125.59109160069534));
          this.coordArray.push(new google.maps.LatLng(7.110934844663654, 125.59107818965026));
          this.coordArray.push(new google.maps.LatLng(7.111051954096112, 125.5910862362773));
          this.coordArray.push(new google.maps.LatLng(7.111179709806559, 125.59102722767898));
          this.coordArray.push(new google.maps.LatLng(7.111139786150858, 125.59121498231002));
          this.coordArray.push(new google.maps.LatLng(7.111270203413291, 125.59132227067062));
          this.coordArray.push(new google.maps.LatLng(7.11132609651442, 125.59176215294906));
          this.coordArray.push(new google.maps.LatLng(7.111238264495309, 125.5918050682933));
          this.coordArray.push(new google.maps.LatLng(7.111153094036479, 125.59183457259246));
          this.coordArray.push(new google.maps.LatLng(7.110964122024574, 125.59183457259246));
          this.coordArray.push(new google.maps.LatLng(7.111086554604538, 125.59185603026458));
          this.coordArray.push(new google.maps.LatLng(7.1109002441437905, 125.59178897503921));
          this.coordArray.push(new google.maps.LatLng(7.110706969281097, 125.59205616761903));
          this.coordArray.push(new google.maps.LatLng(7.110635106624363, 125.59217418481569));
          this.coordArray.push(new google.maps.LatLng(7.1105818750195455, 125.59221710015993));
          this.coordArray.push(new google.maps.LatLng(7.110552597634263, 125.59228147317629));
          this.coordArray.push(new google.maps.LatLng(7.110459442305045, 125.59232170631151));
          this.coordArray.push(new google.maps.LatLng(7.110366286956934, 125.59239949037294));
          this.coordArray.push(new google.maps.LatLng(7.1103077321570165, 125.5924450879262));
          this.coordArray.push(new google.maps.LatLng(7.109613, 125.589775));

        break;
    }
  }

  delay(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng, alpha: 0.4 });
    console.log(this.markers);
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

}
