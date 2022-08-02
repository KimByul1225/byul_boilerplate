import UsageInput from "@/pages/sample/UsageInput";
import UsageTextarea from "@/pages/sample/UsageTextarea";
import UsageSelect from "@/pages/sample/UsageSelect";
import UsageCheckbox from "@/pages/sample/UsageCheckbox";
import UsageRadio from "@/pages/sample/UsageRadio";
import UsageCalendar from "@/pages/sample/UsageCalendar";
import UsageFileUpload from "@/pages/sample/UsageFileUpload";

/**
 * @description 샘플 가이드 페이지
 */
function Guide() {
    return (
        <div style={{ margin: "30px" }}>
            <h1>Guide</h1>
            <hr />
            <div className="row">
                <div className="col">
                    <div>
                        <h6># Input Component</h6>
                        <UsageInput />
                    </div>
                    <br />
                    <div>
                        <h6># Textarea Component</h6>
                        <UsageTextarea />
                    </div>
                    <br />
                    <div>
                        <h6># Select Component</h6>
                        <UsageSelect />
                    </div>
                    <br />
                    <div>
                        <h6># Checkbox Component</h6>
                        <UsageCheckbox />
                    </div>
                    <br />
                    <div>
                        <h6># Radio Component</h6>
                        <UsageRadio />
                    </div>
                    <br />
                </div>
                <div className="col">
                    <div>
                        <h6># Calendar Component</h6>
                        <UsageCalendar />
                    </div>
                    <br />
                    <div>
                        <h6># File Upload Component</h6>
                        <UsageFileUpload />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guide;
