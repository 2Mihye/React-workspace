import React from "react";
import ChildComponent from './ChildComponent';

/* ChildComponent에서는 prop 라는 이름으로 파라미터를 전달 받는다.
        prop는 무조건 사용해야하는 이름은 아니지만 부모에게 전달받아 데이터를 사용한다는 의미를 지니기 때문에
        부모 컴포넌트에서 전달 받을 때는 prop라는 이름을 사용하는 게 좋다.

        message와 data 또한 개발자가 정해놓은 이름일 뿐 무조건 작성(사용)해야하는 이름은 아님.
*/

function ParentComponent() {
    const data = 'Hello 나는 ParentComponent야~';

    return <ChildComponent message = {data} />;
}

export default ParentComponent;