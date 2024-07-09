import Store from "../store";
import { getColumnAndRowSize } from "./updateCell";

/** 自定义输入框 */
const cellInputCtrl = {
    cellFocus: function (r, c, cell) {
        const size = getColumnAndRowSize(r, c, Store.flowdata);

        method.createHookFunction("cellEditorCustom", cell, size);

        $("#luckysheet-input-box").click();
    },
    exitEditMode: function (val) {
        if (val === undefined) {
            luckkysheet.exitEditMode();
        } else {
            $("#luckysheet-rich-text-editor").html(val);
            luckkysheet.exitEditMode();
        }
    },
};

export default cellInputCtrl;
