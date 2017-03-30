/**
 * 在终端打印出一个Node对象的所有的childNodes
 */
function debug_showChildNodesWithNode(nodeItem) {
    "use strict";

    if (nodeItem instanceof Node) {

        var len = nodeItem.childNodes.length;
        var i;
        for (i = 0; i < len; i++) {

            var nodeObject = createNodeObject(nodeItem.childNodes[i]);

            if (nodeObject.nodeType === 1) {

                console.log("%c" + "[" + i + "]" + nodeObject.info(), "color:red");

            } else {

                console.log("[" + i + "]" + nodeObject.info());
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * NodeObject对象
 */
function NodeObject(nodeType, nodeName, nodeValue) {
    "use strict";
    this.nodeType = nodeType;
    this.nodeTypeInfo = undefined;
    this.nodeName = nodeName;
    this.nodeValue = nodeValue;
    this.description = undefined;
    this.info = info;

    function info() {

        if ( /* 元素节点 */ this.nodeType === 1) {

            return "[Element] <" + this.nodeName.toLowerCase() + ">";

        } else if ( /* 文本节点 */ this.nodeType === 3) {

            // 用正则表达式去掉前后的空格
            function Trim(str) {

                return str.replace(/(^\s*)|(\s*$)/g, "");
            }

            var string = Trim(this.nodeValue);

            if (string.length > 0) {

                return "[Text] " + string;

            } else {

                return "[Text] 回车或者空格";
            }

        } else {

            return "[" + this.nodeTypeInfo + "]" + "(" + this.description + ")";
        }
    }
}

/**
 * NodeObject对象构造函数
 */
function createNodeObject(nodeItem) {
    "use strict";
    if (nodeItem instanceof Node) {

        var nodeObject = new NodeObject(nodeItem.nodeType, nodeItem.nodeName, nodeItem.nodeValue);

        switch (nodeObject.nodeType) {

            case 1:
                nodeObject.nodeTypeInfo = "Element";
                nodeObject.description = "元素";
                break;

            case 2:
                nodeObject.nodeTypeInfo = "Attr";
                nodeObject.description = "属性";
                break;

            case 3:
                nodeObject.nodeTypeInfo = "Text";
                nodeObject.description = "元素或属性中的文本内容";
                break;

            case 4:
                nodeObject.nodeTypeInfo = "CDATASection";
                nodeObject.description = "文档中的CDATA部分(不会由解析器解析的文本)";
                break;

            case 5:
                nodeObject.nodeTypeInfo = "EntityReference";
                nodeObject.description = "实体引用";
                break;

            case 6:
                nodeObject.nodeTypeInfo = "Entity";
                nodeObject.description = "实体";
                break;

            case 7:
                nodeObject.nodeTypeInfo = "ProcessingInstruction";
                nodeObject.description = "处理指令";
                break;

            case 8:
                nodeObject.nodeTypeInfo = "Comment";
                nodeObject.description = "注释";
                break;

            case 9:
                nodeObject.nodeTypeInfo = "Document";
                nodeObject.description = "整个文档(DOM树的根节点)";
                break;

            case 10:
                nodeObject.nodeTypeInfo = "DocumentType";
                nodeObject.description = "向为文档定义的实体提供接口";
                break;

            case 11:
                nodeObject.nodeTypeInfo = "DocumentFragment";
                nodeObject.description = "轻量级的Document对象,能够容纳文档的某个部分";
                break;

            case 12:
                nodeObject.nodeTypeInfo = "Notation";
                nodeObject.description = "DTD中声明的符号";
                break;

            default:
                break;
        }

        return nodeObject;

    } else {

        return undefined;
    }
}

/**
 * 判断是否是元素节点
 */
function isElementNode(nodeItem) {
    "use strict";

    if (nodeItem instanceof Node) {

        return nodeItem.nodeType === 1;

    } else {

        return false;
    }
}

/**
 * 删除指定元素节点
 */
function removeElementNode(nodeItem) {
    "use strict";

    if (nodeItem instanceof Node && nodeItem.nodeType === 1) {

        nodeItem.parentNode != null ? nodeItem.parentNode.removeChild(nodeItem) : 0;
    }
}
