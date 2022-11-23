import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button3 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex354Cb, useFlex352Cb, useFlex349Cb, useFlex353Cb, useFlex350Cb, useFlex351Cb, useFlex355Cb, useFlex356Cb, useFlex357Cb, useFlex360Cb, useFlex361Cb, useFlex362Cb, useFlex363Cb, useFlex368Cb, useFlex364Cb, useFlex365Cb, useFlex366Cb, useFlex367Cb, useFlex373Cb, useFlex369Cb, useFlex370Cb, useFlex371Cb, useFlex372Cb, useImage190Cb, useTextBox417Cb, useTextBox418Cb, useTextBox419Cb, useTextBox420Cb, useTextBox413Cb, useImage188Cb, useButton9Cb, useTextBox414Cb, useTextBox415Cb, useTextBox416Cb, useImage189Cb, useTextBox421Cb, useTextBox422Cb, useTextBox423Cb, useImage191Cb, useTextBox424Cb, useButton10Cb, useTextBox427Cb, useTextBox425Cb, useTextBox426Cb, useImage192Cb, useTextBox428Cb, useTextBox429Cb, useImage193Cb, useTextBox430Cb, useImage194Cb, useTextBox436Cb, useButton11Cb, useTextBox437Cb, useImage198Cb, useImage195Cb, useTextBox431Cb, useImage196Cb, useTextBox432Cb, useTextBox433Cb, useImage197Cb, useTextBox434Cb, useTextBox435Cb, useTextBox443Cb, useButton12Cb, useTextBox444Cb, useImage202Cb, useImage199Cb, useTextBox438Cb, useImage200Cb, useTextBox439Cb, useTextBox440Cb, useImage201Cb, useTextBox441Cb, useTextBox442Cb } from "../page-cbs/pricing";
import "../page-css/pricing.css";
import "../custom/pricing";

export default function Pricing() {
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

  const Flex354Props = useStore((state)=>state["pricing"]["Flex354"]);
const Flex354IoProps = useIoStore((state)=>state["pricing"]["Flex354"]);
const Flex354Cb = useFlex354Cb()
const Flex352Props = useStore((state)=>state["pricing"]["Flex352"]);
const Flex352IoProps = useIoStore((state)=>state["pricing"]["Flex352"]);
const Flex352Cb = useFlex352Cb()
const Flex349Props = useStore((state)=>state["pricing"]["Flex349"]);
const Flex349IoProps = useIoStore((state)=>state["pricing"]["Flex349"]);
const Flex349Cb = useFlex349Cb()
const Flex353Props = useStore((state)=>state["pricing"]["Flex353"]);
const Flex353IoProps = useIoStore((state)=>state["pricing"]["Flex353"]);
const Flex353Cb = useFlex353Cb()
const Flex350Props = useStore((state)=>state["pricing"]["Flex350"]);
const Flex350IoProps = useIoStore((state)=>state["pricing"]["Flex350"]);
const Flex350Cb = useFlex350Cb()
const Flex351Props = useStore((state)=>state["pricing"]["Flex351"]);
const Flex351IoProps = useIoStore((state)=>state["pricing"]["Flex351"]);
const Flex351Cb = useFlex351Cb()
const Flex355Props = useStore((state)=>state["pricing"]["Flex355"]);
const Flex355IoProps = useIoStore((state)=>state["pricing"]["Flex355"]);
const Flex355Cb = useFlex355Cb()
const Flex356Props = useStore((state)=>state["pricing"]["Flex356"]);
const Flex356IoProps = useIoStore((state)=>state["pricing"]["Flex356"]);
const Flex356Cb = useFlex356Cb()
const Flex357Props = useStore((state)=>state["pricing"]["Flex357"]);
const Flex357IoProps = useIoStore((state)=>state["pricing"]["Flex357"]);
const Flex357Cb = useFlex357Cb()
const Flex360Props = useStore((state)=>state["pricing"]["Flex360"]);
const Flex360IoProps = useIoStore((state)=>state["pricing"]["Flex360"]);
const Flex360Cb = useFlex360Cb()
const Flex361Props = useStore((state)=>state["pricing"]["Flex361"]);
const Flex361IoProps = useIoStore((state)=>state["pricing"]["Flex361"]);
const Flex361Cb = useFlex361Cb()
const Flex362Props = useStore((state)=>state["pricing"]["Flex362"]);
const Flex362IoProps = useIoStore((state)=>state["pricing"]["Flex362"]);
const Flex362Cb = useFlex362Cb()
const Flex363Props = useStore((state)=>state["pricing"]["Flex363"]);
const Flex363IoProps = useIoStore((state)=>state["pricing"]["Flex363"]);
const Flex363Cb = useFlex363Cb()
const Flex368Props = useStore((state)=>state["pricing"]["Flex368"]);
const Flex368IoProps = useIoStore((state)=>state["pricing"]["Flex368"]);
const Flex368Cb = useFlex368Cb()
const Flex364Props = useStore((state)=>state["pricing"]["Flex364"]);
const Flex364IoProps = useIoStore((state)=>state["pricing"]["Flex364"]);
const Flex364Cb = useFlex364Cb()
const Flex365Props = useStore((state)=>state["pricing"]["Flex365"]);
const Flex365IoProps = useIoStore((state)=>state["pricing"]["Flex365"]);
const Flex365Cb = useFlex365Cb()
const Flex366Props = useStore((state)=>state["pricing"]["Flex366"]);
const Flex366IoProps = useIoStore((state)=>state["pricing"]["Flex366"]);
const Flex366Cb = useFlex366Cb()
const Flex367Props = useStore((state)=>state["pricing"]["Flex367"]);
const Flex367IoProps = useIoStore((state)=>state["pricing"]["Flex367"]);
const Flex367Cb = useFlex367Cb()
const Flex373Props = useStore((state)=>state["pricing"]["Flex373"]);
const Flex373IoProps = useIoStore((state)=>state["pricing"]["Flex373"]);
const Flex373Cb = useFlex373Cb()
const Flex369Props = useStore((state)=>state["pricing"]["Flex369"]);
const Flex369IoProps = useIoStore((state)=>state["pricing"]["Flex369"]);
const Flex369Cb = useFlex369Cb()
const Flex370Props = useStore((state)=>state["pricing"]["Flex370"]);
const Flex370IoProps = useIoStore((state)=>state["pricing"]["Flex370"]);
const Flex370Cb = useFlex370Cb()
const Flex371Props = useStore((state)=>state["pricing"]["Flex371"]);
const Flex371IoProps = useIoStore((state)=>state["pricing"]["Flex371"]);
const Flex371Cb = useFlex371Cb()
const Flex372Props = useStore((state)=>state["pricing"]["Flex372"]);
const Flex372IoProps = useIoStore((state)=>state["pricing"]["Flex372"]);
const Flex372Cb = useFlex372Cb()
const Image190Props = useStore((state)=>state["pricing"]["Image190"]);
const Image190IoProps = useIoStore((state)=>state["pricing"]["Image190"]);
const Image190Cb = useImage190Cb()
const TextBox417Props = useStore((state)=>state["pricing"]["TextBox417"]);
const TextBox417IoProps = useIoStore((state)=>state["pricing"]["TextBox417"]);
const TextBox417Cb = useTextBox417Cb()
const TextBox418Props = useStore((state)=>state["pricing"]["TextBox418"]);
const TextBox418IoProps = useIoStore((state)=>state["pricing"]["TextBox418"]);
const TextBox418Cb = useTextBox418Cb()
const TextBox419Props = useStore((state)=>state["pricing"]["TextBox419"]);
const TextBox419IoProps = useIoStore((state)=>state["pricing"]["TextBox419"]);
const TextBox419Cb = useTextBox419Cb()
const TextBox420Props = useStore((state)=>state["pricing"]["TextBox420"]);
const TextBox420IoProps = useIoStore((state)=>state["pricing"]["TextBox420"]);
const TextBox420Cb = useTextBox420Cb()
const TextBox413Props = useStore((state)=>state["pricing"]["TextBox413"]);
const TextBox413IoProps = useIoStore((state)=>state["pricing"]["TextBox413"]);
const TextBox413Cb = useTextBox413Cb()
const Image188Props = useStore((state)=>state["pricing"]["Image188"]);
const Image188IoProps = useIoStore((state)=>state["pricing"]["Image188"]);
const Image188Cb = useImage188Cb()
const Button9Props = useStore((state)=>state["pricing"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["pricing"]["Button9"]);
const Button9Cb = useButton9Cb()
const TextBox414Props = useStore((state)=>state["pricing"]["TextBox414"]);
const TextBox414IoProps = useIoStore((state)=>state["pricing"]["TextBox414"]);
const TextBox414Cb = useTextBox414Cb()
const TextBox415Props = useStore((state)=>state["pricing"]["TextBox415"]);
const TextBox415IoProps = useIoStore((state)=>state["pricing"]["TextBox415"]);
const TextBox415Cb = useTextBox415Cb()
const TextBox416Props = useStore((state)=>state["pricing"]["TextBox416"]);
const TextBox416IoProps = useIoStore((state)=>state["pricing"]["TextBox416"]);
const TextBox416Cb = useTextBox416Cb()
const Image189Props = useStore((state)=>state["pricing"]["Image189"]);
const Image189IoProps = useIoStore((state)=>state["pricing"]["Image189"]);
const Image189Cb = useImage189Cb()
const TextBox421Props = useStore((state)=>state["pricing"]["TextBox421"]);
const TextBox421IoProps = useIoStore((state)=>state["pricing"]["TextBox421"]);
const TextBox421Cb = useTextBox421Cb()
const TextBox422Props = useStore((state)=>state["pricing"]["TextBox422"]);
const TextBox422IoProps = useIoStore((state)=>state["pricing"]["TextBox422"]);
const TextBox422Cb = useTextBox422Cb()
const TextBox423Props = useStore((state)=>state["pricing"]["TextBox423"]);
const TextBox423IoProps = useIoStore((state)=>state["pricing"]["TextBox423"]);
const TextBox423Cb = useTextBox423Cb()
const Image191Props = useStore((state)=>state["pricing"]["Image191"]);
const Image191IoProps = useIoStore((state)=>state["pricing"]["Image191"]);
const Image191Cb = useImage191Cb()
const TextBox424Props = useStore((state)=>state["pricing"]["TextBox424"]);
const TextBox424IoProps = useIoStore((state)=>state["pricing"]["TextBox424"]);
const TextBox424Cb = useTextBox424Cb()
const Button10Props = useStore((state)=>state["pricing"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["pricing"]["Button10"]);
const Button10Cb = useButton10Cb()
const TextBox427Props = useStore((state)=>state["pricing"]["TextBox427"]);
const TextBox427IoProps = useIoStore((state)=>state["pricing"]["TextBox427"]);
const TextBox427Cb = useTextBox427Cb()
const TextBox425Props = useStore((state)=>state["pricing"]["TextBox425"]);
const TextBox425IoProps = useIoStore((state)=>state["pricing"]["TextBox425"]);
const TextBox425Cb = useTextBox425Cb()
const TextBox426Props = useStore((state)=>state["pricing"]["TextBox426"]);
const TextBox426IoProps = useIoStore((state)=>state["pricing"]["TextBox426"]);
const TextBox426Cb = useTextBox426Cb()
const Image192Props = useStore((state)=>state["pricing"]["Image192"]);
const Image192IoProps = useIoStore((state)=>state["pricing"]["Image192"]);
const Image192Cb = useImage192Cb()
const TextBox428Props = useStore((state)=>state["pricing"]["TextBox428"]);
const TextBox428IoProps = useIoStore((state)=>state["pricing"]["TextBox428"]);
const TextBox428Cb = useTextBox428Cb()
const TextBox429Props = useStore((state)=>state["pricing"]["TextBox429"]);
const TextBox429IoProps = useIoStore((state)=>state["pricing"]["TextBox429"]);
const TextBox429Cb = useTextBox429Cb()
const Image193Props = useStore((state)=>state["pricing"]["Image193"]);
const Image193IoProps = useIoStore((state)=>state["pricing"]["Image193"]);
const Image193Cb = useImage193Cb()
const TextBox430Props = useStore((state)=>state["pricing"]["TextBox430"]);
const TextBox430IoProps = useIoStore((state)=>state["pricing"]["TextBox430"]);
const TextBox430Cb = useTextBox430Cb()
const Image194Props = useStore((state)=>state["pricing"]["Image194"]);
const Image194IoProps = useIoStore((state)=>state["pricing"]["Image194"]);
const Image194Cb = useImage194Cb()
const TextBox436Props = useStore((state)=>state["pricing"]["TextBox436"]);
const TextBox436IoProps = useIoStore((state)=>state["pricing"]["TextBox436"]);
const TextBox436Cb = useTextBox436Cb()
const Button11Props = useStore((state)=>state["pricing"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["pricing"]["Button11"]);
const Button11Cb = useButton11Cb()
const TextBox437Props = useStore((state)=>state["pricing"]["TextBox437"]);
const TextBox437IoProps = useIoStore((state)=>state["pricing"]["TextBox437"]);
const TextBox437Cb = useTextBox437Cb()
const Image198Props = useStore((state)=>state["pricing"]["Image198"]);
const Image198IoProps = useIoStore((state)=>state["pricing"]["Image198"]);
const Image198Cb = useImage198Cb()
const Image195Props = useStore((state)=>state["pricing"]["Image195"]);
const Image195IoProps = useIoStore((state)=>state["pricing"]["Image195"]);
const Image195Cb = useImage195Cb()
const TextBox431Props = useStore((state)=>state["pricing"]["TextBox431"]);
const TextBox431IoProps = useIoStore((state)=>state["pricing"]["TextBox431"]);
const TextBox431Cb = useTextBox431Cb()
const Image196Props = useStore((state)=>state["pricing"]["Image196"]);
const Image196IoProps = useIoStore((state)=>state["pricing"]["Image196"]);
const Image196Cb = useImage196Cb()
const TextBox432Props = useStore((state)=>state["pricing"]["TextBox432"]);
const TextBox432IoProps = useIoStore((state)=>state["pricing"]["TextBox432"]);
const TextBox432Cb = useTextBox432Cb()
const TextBox433Props = useStore((state)=>state["pricing"]["TextBox433"]);
const TextBox433IoProps = useIoStore((state)=>state["pricing"]["TextBox433"]);
const TextBox433Cb = useTextBox433Cb()
const Image197Props = useStore((state)=>state["pricing"]["Image197"]);
const Image197IoProps = useIoStore((state)=>state["pricing"]["Image197"]);
const Image197Cb = useImage197Cb()
const TextBox434Props = useStore((state)=>state["pricing"]["TextBox434"]);
const TextBox434IoProps = useIoStore((state)=>state["pricing"]["TextBox434"]);
const TextBox434Cb = useTextBox434Cb()
const TextBox435Props = useStore((state)=>state["pricing"]["TextBox435"]);
const TextBox435IoProps = useIoStore((state)=>state["pricing"]["TextBox435"]);
const TextBox435Cb = useTextBox435Cb()
const TextBox443Props = useStore((state)=>state["pricing"]["TextBox443"]);
const TextBox443IoProps = useIoStore((state)=>state["pricing"]["TextBox443"]);
const TextBox443Cb = useTextBox443Cb()
const Button12Props = useStore((state)=>state["pricing"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["pricing"]["Button12"]);
const Button12Cb = useButton12Cb()
const TextBox444Props = useStore((state)=>state["pricing"]["TextBox444"]);
const TextBox444IoProps = useIoStore((state)=>state["pricing"]["TextBox444"]);
const TextBox444Cb = useTextBox444Cb()
const Image202Props = useStore((state)=>state["pricing"]["Image202"]);
const Image202IoProps = useIoStore((state)=>state["pricing"]["Image202"]);
const Image202Cb = useImage202Cb()
const Image199Props = useStore((state)=>state["pricing"]["Image199"]);
const Image199IoProps = useIoStore((state)=>state["pricing"]["Image199"]);
const Image199Cb = useImage199Cb()
const TextBox438Props = useStore((state)=>state["pricing"]["TextBox438"]);
const TextBox438IoProps = useIoStore((state)=>state["pricing"]["TextBox438"]);
const TextBox438Cb = useTextBox438Cb()
const Image200Props = useStore((state)=>state["pricing"]["Image200"]);
const Image200IoProps = useIoStore((state)=>state["pricing"]["Image200"]);
const Image200Cb = useImage200Cb()
const TextBox439Props = useStore((state)=>state["pricing"]["TextBox439"]);
const TextBox439IoProps = useIoStore((state)=>state["pricing"]["TextBox439"]);
const TextBox439Cb = useTextBox439Cb()
const TextBox440Props = useStore((state)=>state["pricing"]["TextBox440"]);
const TextBox440IoProps = useIoStore((state)=>state["pricing"]["TextBox440"]);
const TextBox440Cb = useTextBox440Cb()
const Image201Props = useStore((state)=>state["pricing"]["Image201"]);
const Image201IoProps = useIoStore((state)=>state["pricing"]["Image201"]);
const Image201Cb = useImage201Cb()
const TextBox441Props = useStore((state)=>state["pricing"]["TextBox441"]);
const TextBox441IoProps = useIoStore((state)=>state["pricing"]["TextBox441"]);
const TextBox441Cb = useTextBox441Cb()
const TextBox442Props = useStore((state)=>state["pricing"]["TextBox442"]);
const TextBox442IoProps = useIoStore((state)=>state["pricing"]["TextBox442"]);
const TextBox442Cb = useTextBox442Cb()

  return (<>
  <Flex3 className="p-pricing Flex354 bpt" {...Flex354Props} {...Flex354Cb} {...Flex354IoProps}>
<Image3 className="p-pricing Image190 bpt" {...Image190Props} {...Image190Cb} {...Image190IoProps}/>
<Flex3 className="p-pricing Flex352 bpt" {...Flex352Props} {...Flex352Cb} {...Flex352IoProps}>
<TextBox3 className="p-pricing TextBox417 bpt" {...TextBox417Props} {...TextBox417Cb} {...TextBox417IoProps}/>
<TextBox3 className="p-pricing TextBox418 bpt" {...TextBox418Props} {...TextBox418Cb} {...TextBox418IoProps}/>
<TextBox3 className="p-pricing TextBox419 bpt" {...TextBox419Props} {...TextBox419Cb} {...TextBox419IoProps}/>
<TextBox3 className="p-pricing TextBox420 bpt" {...TextBox420Props} {...TextBox420Cb} {...TextBox420IoProps}/>
<Flex3 className="p-pricing Flex349 bpt" {...Flex349Props} {...Flex349Cb} {...Flex349IoProps}>
<TextBox3 className="p-pricing TextBox413 bpt" {...TextBox413Props} {...TextBox413Cb} {...TextBox413IoProps}/>
<Image3 className="p-pricing Image188 bpt" {...Image188Props} {...Image188Cb} {...Image188IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-pricing Flex353 bpt" {...Flex353Props} {...Flex353Cb} {...Flex353IoProps}>
<Flex3 className="p-pricing Flex350 bpt" {...Flex350Props} {...Flex350Cb} {...Flex350IoProps}>
<TextBox3 className="p-pricing TextBox414 bpt" {...TextBox414Props} {...TextBox414Cb} {...TextBox414IoProps}/>
<TextBox3 className="p-pricing TextBox415 bpt" {...TextBox415Props} {...TextBox415Cb} {...TextBox415IoProps}/>
</Flex3>
<Flex3 className="p-pricing Flex351 bpt" {...Flex351Props} {...Flex351Cb} {...Flex351IoProps}>
<Image3 className="p-pricing Image189 bpt" {...Image189Props} {...Image189Cb} {...Image189IoProps}/>
<TextBox3 className="p-pricing TextBox416 bpt" {...TextBox416Props} {...TextBox416Cb} {...TextBox416IoProps}/>
</Flex3>
<Button3 className="p-pricing Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-pricing Flex355 bpt" {...Flex355Props} {...Flex355Cb} {...Flex355IoProps}>
<TextBox3 className="p-pricing TextBox421 bpt" {...TextBox421Props} {...TextBox421Cb} {...TextBox421IoProps}/>
<TextBox3 className="p-pricing TextBox422 bpt" {...TextBox422Props} {...TextBox422Cb} {...TextBox422IoProps}/>
<TextBox3 className="p-pricing TextBox423 bpt" {...TextBox423Props} {...TextBox423Cb} {...TextBox423IoProps}/>
<Flex3 className="p-pricing Flex356 bpt" {...Flex356Props} {...Flex356Cb} {...Flex356IoProps}>
<Flex3 className="p-pricing Flex357 bpt" {...Flex357Props} {...Flex357Cb} {...Flex357IoProps}>
<Image3 className="p-pricing Image191 bpt" {...Image191Props} {...Image191Cb} {...Image191IoProps}/>
<TextBox3 className="p-pricing TextBox424 bpt" {...TextBox424Props} {...TextBox424Cb} {...TextBox424IoProps}/>
<Flex3 className="p-pricing Flex360 bpt" {...Flex360Props} {...Flex360Cb} {...Flex360IoProps}>
<TextBox3 className="p-pricing TextBox425 bpt" {...TextBox425Props} {...TextBox425Cb} {...TextBox425IoProps}/>
<TextBox3 className="p-pricing TextBox426 bpt" {...TextBox426Props} {...TextBox426Cb} {...TextBox426IoProps}/>
</Flex3>
<Button3 className="p-pricing Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
<TextBox3 className="p-pricing TextBox427 bpt" {...TextBox427Props} {...TextBox427Cb} {...TextBox427IoProps}/>
<Flex3 className="p-pricing Flex361 bpt" {...Flex361Props} {...Flex361Cb} {...Flex361IoProps}>
<Image3 className="p-pricing Image192 bpt" {...Image192Props} {...Image192Cb} {...Image192IoProps}/>
<TextBox3 className="p-pricing TextBox428 bpt" {...TextBox428Props} {...TextBox428Cb} {...TextBox428IoProps}/>
</Flex3>
<Flex3 className="p-pricing Flex362 bpt" {...Flex362Props} {...Flex362Cb} {...Flex362IoProps}>
<Image3 className="p-pricing Image193 bpt" {...Image193Props} {...Image193Cb} {...Image193IoProps}/>
<TextBox3 className="p-pricing TextBox429 bpt" {...TextBox429Props} {...TextBox429Cb} {...TextBox429IoProps}/>
</Flex3>
<Flex3 className="p-pricing Flex363 bpt" {...Flex363Props} {...Flex363Cb} {...Flex363IoProps}>
<Image3 className="p-pricing Image194 bpt" {...Image194Props} {...Image194Cb} {...Image194IoProps}/>
<TextBox3 className="p-pricing TextBox430 bpt" {...TextBox430Props} {...TextBox430Cb} {...TextBox430IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-pricing Flex368 bpt" {...Flex368Props} {...Flex368Cb} {...Flex368IoProps}>
<Image3 className="p-pricing Image198 bpt" {...Image198Props} {...Image198Cb} {...Image198IoProps}/>
<TextBox3 className="p-pricing TextBox437 bpt" {...TextBox437Props} {...TextBox437Cb} {...TextBox437IoProps}/>
<Flex3 className="p-pricing Flex367 bpt" {...Flex367Props} {...Flex367Cb} {...Flex367IoProps}>
<TextBox3 className="p-pricing TextBox435 bpt" {...TextBox435Props} {...TextBox435Cb} {...TextBox435IoProps}/>
<TextBox3 className="p-pricing TextBox434 bpt" {...TextBox434Props} {...TextBox434Cb} {...TextBox434IoProps}/>
</Flex3>
<Button3 className="p-pricing Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
<TextBox3 className="p-pricing TextBox436 bpt" {...TextBox436Props} {...TextBox436Cb} {...TextBox436IoProps}/>
<Flex3 className="p-pricing Flex366 bpt" {...Flex366Props} {...Flex366Cb} {...Flex366IoProps}>
<Image3 className="p-pricing Image197 bpt" {...Image197Props} {...Image197Cb} {...Image197IoProps}/>
<TextBox3 className="p-pricing TextBox433 bpt" {...TextBox433Props} {...TextBox433Cb} {...TextBox433IoProps}/>
</Flex3>
<Flex3 className="p-pricing Flex365 bpt" {...Flex365Props} {...Flex365Cb} {...Flex365IoProps}>
<Image3 className="p-pricing Image196 bpt" {...Image196Props} {...Image196Cb} {...Image196IoProps}/>
<TextBox3 className="p-pricing TextBox432 bpt" {...TextBox432Props} {...TextBox432Cb} {...TextBox432IoProps}/>
</Flex3>
<Flex3 className="p-pricing Flex364 bpt" {...Flex364Props} {...Flex364Cb} {...Flex364IoProps}>
<Image3 className="p-pricing Image195 bpt" {...Image195Props} {...Image195Cb} {...Image195IoProps}/>
<TextBox3 className="p-pricing TextBox431 bpt" {...TextBox431Props} {...TextBox431Cb} {...TextBox431IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-pricing Flex373 bpt" {...Flex373Props} {...Flex373Cb} {...Flex373IoProps}>
<Image3 className="p-pricing Image202 bpt" {...Image202Props} {...Image202Cb} {...Image202IoProps}/>
<TextBox3 className="p-pricing TextBox444 bpt" {...TextBox444Props} {...TextBox444Cb} {...TextBox444IoProps}/>
<Flex3 className="p-pricing Flex372 bpt" {...Flex372Props} {...Flex372Cb} {...Flex372IoProps}>
<TextBox3 className="p-pricing TextBox442 bpt" {...TextBox442Props} {...TextBox442Cb} {...TextBox442IoProps}/>
<TextBox3 className="p-pricing TextBox441 bpt" {...TextBox441Props} {...TextBox441Cb} {...TextBox441IoProps}/>
</Flex3>
<Button3 className="p-pricing Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<TextBox3 className="p-pricing TextBox443 bpt" {...TextBox443Props} {...TextBox443Cb} {...TextBox443IoProps}/>
<Flex3 className="p-pricing Flex371 bpt" {...Flex371Props} {...Flex371Cb} {...Flex371IoProps}>
<Image3 className="p-pricing Image201 bpt" {...Image201Props} {...Image201Cb} {...Image201IoProps}/>
<TextBox3 className="p-pricing TextBox440 bpt" {...TextBox440Props} {...TextBox440Cb} {...TextBox440IoProps}/>
</Flex3>
<Flex3 className="p-pricing Flex370 bpt" {...Flex370Props} {...Flex370Cb} {...Flex370IoProps}>
<Image3 className="p-pricing Image200 bpt" {...Image200Props} {...Image200Cb} {...Image200IoProps}/>
<TextBox3 className="p-pricing TextBox439 bpt" {...TextBox439Props} {...TextBox439Cb} {...TextBox439IoProps}/>
</Flex3>
<Flex3 className="p-pricing Flex369 bpt" {...Flex369Props} {...Flex369Cb} {...Flex369IoProps}>
<Image3 className="p-pricing Image199 bpt" {...Image199Props} {...Image199Cb} {...Image199IoProps}/>
<TextBox3 className="p-pricing TextBox438 bpt" {...TextBox438Props} {...TextBox438Cb} {...TextBox438IoProps}/>
</Flex3>
</Flex3>
</Flex3>
</Flex3>
  </>);
}
