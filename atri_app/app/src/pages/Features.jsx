import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input as Input2 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex324Cb, useFlex322Cb, useFlex319Cb, useFlex320Cb, useFlex323Cb, useFlex321Cb, useFlex325Cb, useFlex329Cb, useFlex326Cb, useFlex327Cb, useFlex328Cb, useFlex333Cb, useFlex330Cb, useFlex331Cb, useFlex332Cb, useFlex348Cb, useFlex347Cb, useFlex342Cb, useFlex343Cb, useFlex344Cb, useFlex345Cb, useFlex346Cb, useFlex341Cb, useImage179Cb, useButton6Cb, useImage177Cb, useTextBox331Cb, useTextBox332Cb, useTextBox333Cb, useTextBox335Cb, useTextBox336Cb, useTextBox337Cb, useTextBox338Cb, useImage178Cb, useTextBox334Cb, useTextBox339Cb, useTextBox340Cb, useTextBox341Cb, useTextBox342Cb, useImage180Cb, useTextBox343Cb, useTextBox344Cb, useImage181Cb, useImage182Cb, useTextBox345Cb, useTextBox346Cb, useTextBox347Cb, useTextBox348Cb, useImage183Cb, useImage184Cb, useTextBox349Cb, useTextBox350Cb, useImage185Cb, useTextBox351Cb, useTextBox352Cb, useTextBox385Cb, useTextBox386Cb, useTextBox387Cb, useTextBox388Cb, useTextBox389Cb, useTextBox390Cb, useTextBox391Cb, useTextBox392Cb, useTextBox393Cb, useTextBox394Cb, useTextBox395Cb, useTextBox396Cb, useTextBox397Cb, useTextBox398Cb, useTextBox399Cb, useTextBox400Cb, useTextBox401Cb, useTextBox402Cb, useTextBox403Cb, useTextBox404Cb, useTextBox405Cb, useTextBox406Cb, useTextBox407Cb, useTextBox408Cb, useTextBox409Cb, useTextBox410Cb, useTextBox411Cb, useTextBox412Cb, useImage187Cb, useButton8Cb, useInput5Cb, useTextBox383Cb, useTextBox384Cb } from "../page-cbs/features";
import "../page-css/features.css";
import "../custom/features";

export default function Features() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex324Props = useStore((state)=>state["features"]["Flex324"]);
const Flex324IoProps = useIoStore((state)=>state["features"]["Flex324"]);
const Flex324Cb = useFlex324Cb()
const Flex322Props = useStore((state)=>state["features"]["Flex322"]);
const Flex322IoProps = useIoStore((state)=>state["features"]["Flex322"]);
const Flex322Cb = useFlex322Cb()
const Flex319Props = useStore((state)=>state["features"]["Flex319"]);
const Flex319IoProps = useIoStore((state)=>state["features"]["Flex319"]);
const Flex319Cb = useFlex319Cb()
const Flex320Props = useStore((state)=>state["features"]["Flex320"]);
const Flex320IoProps = useIoStore((state)=>state["features"]["Flex320"]);
const Flex320Cb = useFlex320Cb()
const Flex323Props = useStore((state)=>state["features"]["Flex323"]);
const Flex323IoProps = useIoStore((state)=>state["features"]["Flex323"]);
const Flex323Cb = useFlex323Cb()
const Flex321Props = useStore((state)=>state["features"]["Flex321"]);
const Flex321IoProps = useIoStore((state)=>state["features"]["Flex321"]);
const Flex321Cb = useFlex321Cb()
const Flex325Props = useStore((state)=>state["features"]["Flex325"]);
const Flex325IoProps = useIoStore((state)=>state["features"]["Flex325"]);
const Flex325Cb = useFlex325Cb()
const Flex329Props = useStore((state)=>state["features"]["Flex329"]);
const Flex329IoProps = useIoStore((state)=>state["features"]["Flex329"]);
const Flex329Cb = useFlex329Cb()
const Flex326Props = useStore((state)=>state["features"]["Flex326"]);
const Flex326IoProps = useIoStore((state)=>state["features"]["Flex326"]);
const Flex326Cb = useFlex326Cb()
const Flex327Props = useStore((state)=>state["features"]["Flex327"]);
const Flex327IoProps = useIoStore((state)=>state["features"]["Flex327"]);
const Flex327Cb = useFlex327Cb()
const Flex328Props = useStore((state)=>state["features"]["Flex328"]);
const Flex328IoProps = useIoStore((state)=>state["features"]["Flex328"]);
const Flex328Cb = useFlex328Cb()
const Flex333Props = useStore((state)=>state["features"]["Flex333"]);
const Flex333IoProps = useIoStore((state)=>state["features"]["Flex333"]);
const Flex333Cb = useFlex333Cb()
const Flex330Props = useStore((state)=>state["features"]["Flex330"]);
const Flex330IoProps = useIoStore((state)=>state["features"]["Flex330"]);
const Flex330Cb = useFlex330Cb()
const Flex331Props = useStore((state)=>state["features"]["Flex331"]);
const Flex331IoProps = useIoStore((state)=>state["features"]["Flex331"]);
const Flex331Cb = useFlex331Cb()
const Flex332Props = useStore((state)=>state["features"]["Flex332"]);
const Flex332IoProps = useIoStore((state)=>state["features"]["Flex332"]);
const Flex332Cb = useFlex332Cb()
const Flex348Props = useStore((state)=>state["features"]["Flex348"]);
const Flex348IoProps = useIoStore((state)=>state["features"]["Flex348"]);
const Flex348Cb = useFlex348Cb()
const Flex347Props = useStore((state)=>state["features"]["Flex347"]);
const Flex347IoProps = useIoStore((state)=>state["features"]["Flex347"]);
const Flex347Cb = useFlex347Cb()
const Flex342Props = useStore((state)=>state["features"]["Flex342"]);
const Flex342IoProps = useIoStore((state)=>state["features"]["Flex342"]);
const Flex342Cb = useFlex342Cb()
const Flex343Props = useStore((state)=>state["features"]["Flex343"]);
const Flex343IoProps = useIoStore((state)=>state["features"]["Flex343"]);
const Flex343Cb = useFlex343Cb()
const Flex344Props = useStore((state)=>state["features"]["Flex344"]);
const Flex344IoProps = useIoStore((state)=>state["features"]["Flex344"]);
const Flex344Cb = useFlex344Cb()
const Flex345Props = useStore((state)=>state["features"]["Flex345"]);
const Flex345IoProps = useIoStore((state)=>state["features"]["Flex345"]);
const Flex345Cb = useFlex345Cb()
const Flex346Props = useStore((state)=>state["features"]["Flex346"]);
const Flex346IoProps = useIoStore((state)=>state["features"]["Flex346"]);
const Flex346Cb = useFlex346Cb()
const Flex341Props = useStore((state)=>state["features"]["Flex341"]);
const Flex341IoProps = useIoStore((state)=>state["features"]["Flex341"]);
const Flex341Cb = useFlex341Cb()
const Image179Props = useStore((state)=>state["features"]["Image179"]);
const Image179IoProps = useIoStore((state)=>state["features"]["Image179"]);
const Image179Cb = useImage179Cb()
const Button6Props = useStore((state)=>state["features"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["features"]["Button6"]);
const Button6Cb = useButton6Cb()
const Image177Props = useStore((state)=>state["features"]["Image177"]);
const Image177IoProps = useIoStore((state)=>state["features"]["Image177"]);
const Image177Cb = useImage177Cb()
const TextBox331Props = useStore((state)=>state["features"]["TextBox331"]);
const TextBox331IoProps = useIoStore((state)=>state["features"]["TextBox331"]);
const TextBox331Cb = useTextBox331Cb()
const TextBox332Props = useStore((state)=>state["features"]["TextBox332"]);
const TextBox332IoProps = useIoStore((state)=>state["features"]["TextBox332"]);
const TextBox332Cb = useTextBox332Cb()
const TextBox333Props = useStore((state)=>state["features"]["TextBox333"]);
const TextBox333IoProps = useIoStore((state)=>state["features"]["TextBox333"]);
const TextBox333Cb = useTextBox333Cb()
const TextBox335Props = useStore((state)=>state["features"]["TextBox335"]);
const TextBox335IoProps = useIoStore((state)=>state["features"]["TextBox335"]);
const TextBox335Cb = useTextBox335Cb()
const TextBox336Props = useStore((state)=>state["features"]["TextBox336"]);
const TextBox336IoProps = useIoStore((state)=>state["features"]["TextBox336"]);
const TextBox336Cb = useTextBox336Cb()
const TextBox337Props = useStore((state)=>state["features"]["TextBox337"]);
const TextBox337IoProps = useIoStore((state)=>state["features"]["TextBox337"]);
const TextBox337Cb = useTextBox337Cb()
const TextBox338Props = useStore((state)=>state["features"]["TextBox338"]);
const TextBox338IoProps = useIoStore((state)=>state["features"]["TextBox338"]);
const TextBox338Cb = useTextBox338Cb()
const Image178Props = useStore((state)=>state["features"]["Image178"]);
const Image178IoProps = useIoStore((state)=>state["features"]["Image178"]);
const Image178Cb = useImage178Cb()
const TextBox334Props = useStore((state)=>state["features"]["TextBox334"]);
const TextBox334IoProps = useIoStore((state)=>state["features"]["TextBox334"]);
const TextBox334Cb = useTextBox334Cb()
const TextBox339Props = useStore((state)=>state["features"]["TextBox339"]);
const TextBox339IoProps = useIoStore((state)=>state["features"]["TextBox339"]);
const TextBox339Cb = useTextBox339Cb()
const TextBox340Props = useStore((state)=>state["features"]["TextBox340"]);
const TextBox340IoProps = useIoStore((state)=>state["features"]["TextBox340"]);
const TextBox340Cb = useTextBox340Cb()
const TextBox341Props = useStore((state)=>state["features"]["TextBox341"]);
const TextBox341IoProps = useIoStore((state)=>state["features"]["TextBox341"]);
const TextBox341Cb = useTextBox341Cb()
const TextBox342Props = useStore((state)=>state["features"]["TextBox342"]);
const TextBox342IoProps = useIoStore((state)=>state["features"]["TextBox342"]);
const TextBox342Cb = useTextBox342Cb()
const Image180Props = useStore((state)=>state["features"]["Image180"]);
const Image180IoProps = useIoStore((state)=>state["features"]["Image180"]);
const Image180Cb = useImage180Cb()
const TextBox343Props = useStore((state)=>state["features"]["TextBox343"]);
const TextBox343IoProps = useIoStore((state)=>state["features"]["TextBox343"]);
const TextBox343Cb = useTextBox343Cb()
const TextBox344Props = useStore((state)=>state["features"]["TextBox344"]);
const TextBox344IoProps = useIoStore((state)=>state["features"]["TextBox344"]);
const TextBox344Cb = useTextBox344Cb()
const Image181Props = useStore((state)=>state["features"]["Image181"]);
const Image181IoProps = useIoStore((state)=>state["features"]["Image181"]);
const Image181Cb = useImage181Cb()
const Image182Props = useStore((state)=>state["features"]["Image182"]);
const Image182IoProps = useIoStore((state)=>state["features"]["Image182"]);
const Image182Cb = useImage182Cb()
const TextBox345Props = useStore((state)=>state["features"]["TextBox345"]);
const TextBox345IoProps = useIoStore((state)=>state["features"]["TextBox345"]);
const TextBox345Cb = useTextBox345Cb()
const TextBox346Props = useStore((state)=>state["features"]["TextBox346"]);
const TextBox346IoProps = useIoStore((state)=>state["features"]["TextBox346"]);
const TextBox346Cb = useTextBox346Cb()
const TextBox347Props = useStore((state)=>state["features"]["TextBox347"]);
const TextBox347IoProps = useIoStore((state)=>state["features"]["TextBox347"]);
const TextBox347Cb = useTextBox347Cb()
const TextBox348Props = useStore((state)=>state["features"]["TextBox348"]);
const TextBox348IoProps = useIoStore((state)=>state["features"]["TextBox348"]);
const TextBox348Cb = useTextBox348Cb()
const Image183Props = useStore((state)=>state["features"]["Image183"]);
const Image183IoProps = useIoStore((state)=>state["features"]["Image183"]);
const Image183Cb = useImage183Cb()
const Image184Props = useStore((state)=>state["features"]["Image184"]);
const Image184IoProps = useIoStore((state)=>state["features"]["Image184"]);
const Image184Cb = useImage184Cb()
const TextBox349Props = useStore((state)=>state["features"]["TextBox349"]);
const TextBox349IoProps = useIoStore((state)=>state["features"]["TextBox349"]);
const TextBox349Cb = useTextBox349Cb()
const TextBox350Props = useStore((state)=>state["features"]["TextBox350"]);
const TextBox350IoProps = useIoStore((state)=>state["features"]["TextBox350"]);
const TextBox350Cb = useTextBox350Cb()
const Image185Props = useStore((state)=>state["features"]["Image185"]);
const Image185IoProps = useIoStore((state)=>state["features"]["Image185"]);
const Image185Cb = useImage185Cb()
const TextBox351Props = useStore((state)=>state["features"]["TextBox351"]);
const TextBox351IoProps = useIoStore((state)=>state["features"]["TextBox351"]);
const TextBox351Cb = useTextBox351Cb()
const TextBox352Props = useStore((state)=>state["features"]["TextBox352"]);
const TextBox352IoProps = useIoStore((state)=>state["features"]["TextBox352"]);
const TextBox352Cb = useTextBox352Cb()
const TextBox385Props = useStore((state)=>state["features"]["TextBox385"]);
const TextBox385IoProps = useIoStore((state)=>state["features"]["TextBox385"]);
const TextBox385Cb = useTextBox385Cb()
const TextBox386Props = useStore((state)=>state["features"]["TextBox386"]);
const TextBox386IoProps = useIoStore((state)=>state["features"]["TextBox386"]);
const TextBox386Cb = useTextBox386Cb()
const TextBox387Props = useStore((state)=>state["features"]["TextBox387"]);
const TextBox387IoProps = useIoStore((state)=>state["features"]["TextBox387"]);
const TextBox387Cb = useTextBox387Cb()
const TextBox388Props = useStore((state)=>state["features"]["TextBox388"]);
const TextBox388IoProps = useIoStore((state)=>state["features"]["TextBox388"]);
const TextBox388Cb = useTextBox388Cb()
const TextBox389Props = useStore((state)=>state["features"]["TextBox389"]);
const TextBox389IoProps = useIoStore((state)=>state["features"]["TextBox389"]);
const TextBox389Cb = useTextBox389Cb()
const TextBox390Props = useStore((state)=>state["features"]["TextBox390"]);
const TextBox390IoProps = useIoStore((state)=>state["features"]["TextBox390"]);
const TextBox390Cb = useTextBox390Cb()
const TextBox391Props = useStore((state)=>state["features"]["TextBox391"]);
const TextBox391IoProps = useIoStore((state)=>state["features"]["TextBox391"]);
const TextBox391Cb = useTextBox391Cb()
const TextBox392Props = useStore((state)=>state["features"]["TextBox392"]);
const TextBox392IoProps = useIoStore((state)=>state["features"]["TextBox392"]);
const TextBox392Cb = useTextBox392Cb()
const TextBox393Props = useStore((state)=>state["features"]["TextBox393"]);
const TextBox393IoProps = useIoStore((state)=>state["features"]["TextBox393"]);
const TextBox393Cb = useTextBox393Cb()
const TextBox394Props = useStore((state)=>state["features"]["TextBox394"]);
const TextBox394IoProps = useIoStore((state)=>state["features"]["TextBox394"]);
const TextBox394Cb = useTextBox394Cb()
const TextBox395Props = useStore((state)=>state["features"]["TextBox395"]);
const TextBox395IoProps = useIoStore((state)=>state["features"]["TextBox395"]);
const TextBox395Cb = useTextBox395Cb()
const TextBox396Props = useStore((state)=>state["features"]["TextBox396"]);
const TextBox396IoProps = useIoStore((state)=>state["features"]["TextBox396"]);
const TextBox396Cb = useTextBox396Cb()
const TextBox397Props = useStore((state)=>state["features"]["TextBox397"]);
const TextBox397IoProps = useIoStore((state)=>state["features"]["TextBox397"]);
const TextBox397Cb = useTextBox397Cb()
const TextBox398Props = useStore((state)=>state["features"]["TextBox398"]);
const TextBox398IoProps = useIoStore((state)=>state["features"]["TextBox398"]);
const TextBox398Cb = useTextBox398Cb()
const TextBox399Props = useStore((state)=>state["features"]["TextBox399"]);
const TextBox399IoProps = useIoStore((state)=>state["features"]["TextBox399"]);
const TextBox399Cb = useTextBox399Cb()
const TextBox400Props = useStore((state)=>state["features"]["TextBox400"]);
const TextBox400IoProps = useIoStore((state)=>state["features"]["TextBox400"]);
const TextBox400Cb = useTextBox400Cb()
const TextBox401Props = useStore((state)=>state["features"]["TextBox401"]);
const TextBox401IoProps = useIoStore((state)=>state["features"]["TextBox401"]);
const TextBox401Cb = useTextBox401Cb()
const TextBox402Props = useStore((state)=>state["features"]["TextBox402"]);
const TextBox402IoProps = useIoStore((state)=>state["features"]["TextBox402"]);
const TextBox402Cb = useTextBox402Cb()
const TextBox403Props = useStore((state)=>state["features"]["TextBox403"]);
const TextBox403IoProps = useIoStore((state)=>state["features"]["TextBox403"]);
const TextBox403Cb = useTextBox403Cb()
const TextBox404Props = useStore((state)=>state["features"]["TextBox404"]);
const TextBox404IoProps = useIoStore((state)=>state["features"]["TextBox404"]);
const TextBox404Cb = useTextBox404Cb()
const TextBox405Props = useStore((state)=>state["features"]["TextBox405"]);
const TextBox405IoProps = useIoStore((state)=>state["features"]["TextBox405"]);
const TextBox405Cb = useTextBox405Cb()
const TextBox406Props = useStore((state)=>state["features"]["TextBox406"]);
const TextBox406IoProps = useIoStore((state)=>state["features"]["TextBox406"]);
const TextBox406Cb = useTextBox406Cb()
const TextBox407Props = useStore((state)=>state["features"]["TextBox407"]);
const TextBox407IoProps = useIoStore((state)=>state["features"]["TextBox407"]);
const TextBox407Cb = useTextBox407Cb()
const TextBox408Props = useStore((state)=>state["features"]["TextBox408"]);
const TextBox408IoProps = useIoStore((state)=>state["features"]["TextBox408"]);
const TextBox408Cb = useTextBox408Cb()
const TextBox409Props = useStore((state)=>state["features"]["TextBox409"]);
const TextBox409IoProps = useIoStore((state)=>state["features"]["TextBox409"]);
const TextBox409Cb = useTextBox409Cb()
const TextBox410Props = useStore((state)=>state["features"]["TextBox410"]);
const TextBox410IoProps = useIoStore((state)=>state["features"]["TextBox410"]);
const TextBox410Cb = useTextBox410Cb()
const TextBox411Props = useStore((state)=>state["features"]["TextBox411"]);
const TextBox411IoProps = useIoStore((state)=>state["features"]["TextBox411"]);
const TextBox411Cb = useTextBox411Cb()
const TextBox412Props = useStore((state)=>state["features"]["TextBox412"]);
const TextBox412IoProps = useIoStore((state)=>state["features"]["TextBox412"]);
const TextBox412Cb = useTextBox412Cb()
const Image187Props = useStore((state)=>state["features"]["Image187"]);
const Image187IoProps = useIoStore((state)=>state["features"]["Image187"]);
const Image187Cb = useImage187Cb()
const Button8Props = useStore((state)=>state["features"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["features"]["Button8"]);
const Button8Cb = useButton8Cb()
const Input5Props = useStore((state)=>state["features"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["features"]["Input5"]);
const Input5Cb = useInput5Cb()
const TextBox383Props = useStore((state)=>state["features"]["TextBox383"]);
const TextBox383IoProps = useIoStore((state)=>state["features"]["TextBox383"]);
const TextBox383Cb = useTextBox383Cb()
const TextBox384Props = useStore((state)=>state["features"]["TextBox384"]);
const TextBox384IoProps = useIoStore((state)=>state["features"]["TextBox384"]);
const TextBox384Cb = useTextBox384Cb()

  return (<>
  <Flex2 className="p-features Flex324 bpt" {...Flex324Props} {...Flex324Cb} {...Flex324IoProps}>
<Image2 className="p-features Image179 bpt" {...Image179Props} {...Image179Cb} {...Image179IoProps}/>
<Flex2 className="p-features Flex323 bpt" {...Flex323Props} {...Flex323Cb} {...Flex323IoProps}>
<TextBox2 className="p-features TextBox338 bpt" {...TextBox338Props} {...TextBox338Cb} {...TextBox338IoProps}/>
<TextBox2 className="p-features TextBox337 bpt" {...TextBox337Props} {...TextBox337Cb} {...TextBox337IoProps}/>
<TextBox2 className="p-features TextBox336 bpt" {...TextBox336Props} {...TextBox336Cb} {...TextBox336IoProps}/>
<TextBox2 className="p-features TextBox335 bpt" {...TextBox335Props} {...TextBox335Cb} {...TextBox335IoProps}/>
<Flex2 className="p-features Flex321 bpt" {...Flex321Props} {...Flex321Cb} {...Flex321IoProps}>
<TextBox2 className="p-features TextBox334 bpt" {...TextBox334Props} {...TextBox334Cb} {...TextBox334IoProps}/>
<Image2 className="p-features Image178 bpt" {...Image178Props} {...Image178Cb} {...Image178IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-features Flex322 bpt" {...Flex322Props} {...Flex322Cb} {...Flex322IoProps}>
<Flex2 className="p-features Flex320 bpt" {...Flex320Props} {...Flex320Cb} {...Flex320IoProps}>
<TextBox2 className="p-features TextBox333 bpt" {...TextBox333Props} {...TextBox333Cb} {...TextBox333IoProps}/>
<TextBox2 className="p-features TextBox332 bpt" {...TextBox332Props} {...TextBox332Cb} {...TextBox332IoProps}/>
</Flex2>
<Flex2 className="p-features Flex319 bpt" {...Flex319Props} {...Flex319Cb} {...Flex319IoProps}>
<Image2 className="p-features Image177 bpt" {...Image177Props} {...Image177Cb} {...Image177IoProps}/>
<TextBox2 className="p-features TextBox331 bpt" {...TextBox331Props} {...TextBox331Cb} {...TextBox331IoProps}/>
</Flex2>
<Button2 className="p-features Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-features Flex325 bpt" {...Flex325Props} {...Flex325Cb} {...Flex325IoProps}>
<TextBox2 className="p-features TextBox339 bpt" {...TextBox339Props} {...TextBox339Cb} {...TextBox339IoProps}/>
<TextBox2 className="p-features TextBox340 bpt" {...TextBox340Props} {...TextBox340Cb} {...TextBox340IoProps}/>
<Flex2 className="p-features Flex333 bpt" {...Flex333Props} {...Flex333Cb} {...Flex333IoProps}>
<Flex2 className="p-features Flex330 bpt" {...Flex330Props} {...Flex330Cb} {...Flex330IoProps}>
<Image2 className="p-features Image183 bpt" {...Image183Props} {...Image183Cb} {...Image183IoProps}/>
<TextBox2 className="p-features TextBox348 bpt" {...TextBox348Props} {...TextBox348Cb} {...TextBox348IoProps}/>
<TextBox2 className="p-features TextBox347 bpt" {...TextBox347Props} {...TextBox347Cb} {...TextBox347IoProps}/>
</Flex2>
<Flex2 className="p-features Flex331 bpt" {...Flex331Props} {...Flex331Cb} {...Flex331IoProps}>
<Image2 className="p-features Image184 bpt" {...Image184Props} {...Image184Cb} {...Image184IoProps}/>
<TextBox2 className="p-features TextBox349 bpt" {...TextBox349Props} {...TextBox349Cb} {...TextBox349IoProps}/>
<TextBox2 className="p-features TextBox350 bpt" {...TextBox350Props} {...TextBox350Cb} {...TextBox350IoProps}/>
</Flex2>
<Flex2 className="p-features Flex332 bpt" {...Flex332Props} {...Flex332Cb} {...Flex332IoProps}>
<Image2 className="p-features Image185 bpt" {...Image185Props} {...Image185Cb} {...Image185IoProps}/>
<TextBox2 className="p-features TextBox351 bpt" {...TextBox351Props} {...TextBox351Cb} {...TextBox351IoProps}/>
<TextBox2 className="p-features TextBox352 bpt" {...TextBox352Props} {...TextBox352Cb} {...TextBox352IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-features Flex329 bpt" {...Flex329Props} {...Flex329Cb} {...Flex329IoProps}>
<Flex2 className="p-features Flex328 bpt" {...Flex328Props} {...Flex328Cb} {...Flex328IoProps}>
<Image2 className="p-features Image182 bpt" {...Image182Props} {...Image182Cb} {...Image182IoProps}/>
<TextBox2 className="p-features TextBox345 bpt" {...TextBox345Props} {...TextBox345Cb} {...TextBox345IoProps}/>
<TextBox2 className="p-features TextBox346 bpt" {...TextBox346Props} {...TextBox346Cb} {...TextBox346IoProps}/>
</Flex2>
<Flex2 className="p-features Flex327 bpt" {...Flex327Props} {...Flex327Cb} {...Flex327IoProps}>
<Image2 className="p-features Image181 bpt" {...Image181Props} {...Image181Cb} {...Image181IoProps}/>
<TextBox2 className="p-features TextBox344 bpt" {...TextBox344Props} {...TextBox344Cb} {...TextBox344IoProps}/>
<TextBox2 className="p-features TextBox343 bpt" {...TextBox343Props} {...TextBox343Cb} {...TextBox343IoProps}/>
</Flex2>
<Flex2 className="p-features Flex326 bpt" {...Flex326Props} {...Flex326Cb} {...Flex326IoProps}>
<Image2 className="p-features Image180 bpt" {...Image180Props} {...Image180Cb} {...Image180IoProps}/>
<TextBox2 className="p-features TextBox342 bpt" {...TextBox342Props} {...TextBox342Cb} {...TextBox342IoProps}/>
<TextBox2 className="p-features TextBox341 bpt" {...TextBox341Props} {...TextBox341Cb} {...TextBox341IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-features Flex348 bpt" {...Flex348Props} {...Flex348Cb} {...Flex348IoProps}>
<Flex2 className="p-features Flex347 bpt" {...Flex347Props} {...Flex347Cb} {...Flex347IoProps}>
<Flex2 className="p-features Flex346 bpt" {...Flex346Props} {...Flex346Cb} {...Flex346IoProps}>
<Image2 className="p-features Image187 bpt" {...Image187Props} {...Image187Cb} {...Image187IoProps}/>
<Flex2 className="p-features Flex341 bpt" {...Flex341Props} {...Flex341Cb} {...Flex341IoProps}>
<TextBox2 className="p-features TextBox384 bpt" {...TextBox384Props} {...TextBox384Cb} {...TextBox384IoProps}/>
<TextBox2 className="p-features TextBox383 bpt" {...TextBox383Props} {...TextBox383Cb} {...TextBox383IoProps}/>
<Input2 className="p-features Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
<Button2 className="p-features Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-features Flex345 bpt" {...Flex345Props} {...Flex345Cb} {...Flex345IoProps}>
<TextBox2 className="p-features TextBox412 bpt" {...TextBox412Props} {...TextBox412Cb} {...TextBox412IoProps}/>
<TextBox2 className="p-features TextBox411 bpt" {...TextBox411Props} {...TextBox411Cb} {...TextBox411IoProps}/>
<TextBox2 className="p-features TextBox410 bpt" {...TextBox410Props} {...TextBox410Cb} {...TextBox410IoProps}/>
<TextBox2 className="p-features TextBox409 bpt" {...TextBox409Props} {...TextBox409Cb} {...TextBox409IoProps}/>
<TextBox2 className="p-features TextBox408 bpt" {...TextBox408Props} {...TextBox408Cb} {...TextBox408IoProps}/>
<TextBox2 className="p-features TextBox407 bpt" {...TextBox407Props} {...TextBox407Cb} {...TextBox407IoProps}/>
<TextBox2 className="p-features TextBox406 bpt" {...TextBox406Props} {...TextBox406Cb} {...TextBox406IoProps}/>
</Flex2>
<Flex2 className="p-features Flex344 bpt" {...Flex344Props} {...Flex344Cb} {...Flex344IoProps}>
<TextBox2 className="p-features TextBox399 bpt" {...TextBox399Props} {...TextBox399Cb} {...TextBox399IoProps}/>
<TextBox2 className="p-features TextBox400 bpt" {...TextBox400Props} {...TextBox400Cb} {...TextBox400IoProps}/>
<TextBox2 className="p-features TextBox401 bpt" {...TextBox401Props} {...TextBox401Cb} {...TextBox401IoProps}/>
<TextBox2 className="p-features TextBox402 bpt" {...TextBox402Props} {...TextBox402Cb} {...TextBox402IoProps}/>
<TextBox2 className="p-features TextBox403 bpt" {...TextBox403Props} {...TextBox403Cb} {...TextBox403IoProps}/>
<TextBox2 className="p-features TextBox404 bpt" {...TextBox404Props} {...TextBox404Cb} {...TextBox404IoProps}/>
<TextBox2 className="p-features TextBox405 bpt" {...TextBox405Props} {...TextBox405Cb} {...TextBox405IoProps}/>
</Flex2>
<Flex2 className="p-features Flex343 bpt" {...Flex343Props} {...Flex343Cb} {...Flex343IoProps}>
<TextBox2 className="p-features TextBox392 bpt" {...TextBox392Props} {...TextBox392Cb} {...TextBox392IoProps}/>
<TextBox2 className="p-features TextBox393 bpt" {...TextBox393Props} {...TextBox393Cb} {...TextBox393IoProps}/>
<TextBox2 className="p-features TextBox394 bpt" {...TextBox394Props} {...TextBox394Cb} {...TextBox394IoProps}/>
<TextBox2 className="p-features TextBox395 bpt" {...TextBox395Props} {...TextBox395Cb} {...TextBox395IoProps}/>
<TextBox2 className="p-features TextBox396 bpt" {...TextBox396Props} {...TextBox396Cb} {...TextBox396IoProps}/>
<TextBox2 className="p-features TextBox397 bpt" {...TextBox397Props} {...TextBox397Cb} {...TextBox397IoProps}/>
<TextBox2 className="p-features TextBox398 bpt" {...TextBox398Props} {...TextBox398Cb} {...TextBox398IoProps}/>
</Flex2>
<Flex2 className="p-features Flex342 bpt" {...Flex342Props} {...Flex342Cb} {...Flex342IoProps}>
<TextBox2 className="p-features TextBox385 bpt" {...TextBox385Props} {...TextBox385Cb} {...TextBox385IoProps}/>
<TextBox2 className="p-features TextBox386 bpt" {...TextBox386Props} {...TextBox386Cb} {...TextBox386IoProps}/>
<TextBox2 className="p-features TextBox387 bpt" {...TextBox387Props} {...TextBox387Cb} {...TextBox387IoProps}/>
<TextBox2 className="p-features TextBox388 bpt" {...TextBox388Props} {...TextBox388Cb} {...TextBox388IoProps}/>
<TextBox2 className="p-features TextBox389 bpt" {...TextBox389Props} {...TextBox389Cb} {...TextBox389IoProps}/>
<TextBox2 className="p-features TextBox390 bpt" {...TextBox390Props} {...TextBox390Cb} {...TextBox390IoProps}/>
<TextBox2 className="p-features TextBox391 bpt" {...TextBox391Props} {...TextBox391Cb} {...TextBox391IoProps}/>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
