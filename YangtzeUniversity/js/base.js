/* 获取该对象的类名 */
function classNameOf(object) {
    'use strict';

    if (object instanceof Object) {

        return object.constructor.name;

    } else {

        return undefined;
    }
}


/* 将数组中的元素进行随机排序 */
function inner_randomSort(a, b) {
    'use strict';

    return Math.random() > 0.5 ? -1 : 1;
}

function randomSort(array) {
    'use strict';

    if (array instanceof Array) {

        return array.sort(inner_randomSort);

    } else {

        return undefined;
    }
}

/* 根据class的名字获取element数组 */
function elementArrayByClassName(className) {
    'use strict';

    return document.getElementsByClassName(className);
}

/* 根据id获取element */
function elementById(id) {
    'use strict';

    return document.getElementById(id);
}

/* 判断是否是元素节点 */
function isElement(nodeItem) {
    'use strict';

    var type = nodeItem.nodeType;
    if (type === undefined) {

        return false;

    } else {

        return type === document.ELEMENT_NODE;
    }
}

/* 删除指定节点 */
function removeElement(nodeItem) {
    "use strict";

    if (nodeItem !== null) {

        var type = nodeItem.nodeType;
        if (type !== undefined && type === document.ELEMENT_NODE && nodeItem.parentNode !== null) {

            nodeItem.parentNode.removeChild(nodeItem);
        }
    }

    return nodeItem;
}
