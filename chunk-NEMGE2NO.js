import{a as F}from"./chunk-TIYT7UP5.js";import{c as w}from"./chunk-KHEEIZ2W.js";import"./chunk-VEXMTMPT.js";import"./chunk-Z4ZFXNJ7.js";import"./chunk-5IRIGFBY.js";import{Ba as v,Ca as S,Da as f,Wa as q,Xa as y,Ya as x,Za as I,gb as L,za as b}from"./chunk-7IEGBUCH.js";import{Ca as c,Jc as l,Kc as t,Sc as h,Ub as s,Uc as p,hc as e,ic as i,jc as g,yb as a}from"./chunk-7QP7SMW2.js";import"./chunk-2EBTC7QX.js";import{f as N}from"./chunk-66YHNWRR.js";var d={};N(d,{scrollspy1:()=>A,scrollspy2:()=>M,scrollspy3:()=>C,scrollspy4:()=>H});var A=`<div class="bd-example">
<div class="row">
    <div class="col-md-2 col-12">
        <div id="list-example" class="list-group">
            <a class="list-group-item list-group-item-action"
            [ngbScrollSpyItem]="[spy, 'items-1']">Item 1</a>
            <a class="list-group-item list-group-item-action"
            [ngbScrollSpyItem]="spy" fragment="items-2">Item
                2</a>
            <a class="list-group-item list-group-item-action"
            [ngbScrollSpyItem]="spy" fragment="items-3">Item
                3</a>
            <a  class="list-group-item list-group-item-action"
            [ngbScrollSpyItem]="spy" fragment="items">Item
                4</a>
        </div>
    </div>
    <div class="col-md-10 col-12">
        <div ngbScrollSpy #spy="ngbScrollSpy" data-bs-spy="scroll" data-bs-target="#list-example"
            data-bs-smooth-scroll="true" class="scrollspy-example-3"
            tabindex="0">
            <h6 ngbScrollSpyFragment="items-1" class="fw-medium" id="list-item-01">Item 1</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Vel,
                laborum
                reiciendis sunt officia doloribus, soluta ratione id
                reprehenderit
                autem
                temporibus cupiditate necessitatibus atque similique quam ex
                minus,
                sint
                ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                perferendis.
                Aliquid, quas.</p>
            <h6 ngbScrollSpyFragment="items-2" class="fw-medium" id="list-item-02">Item 2</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Vel,
                laborum
                reiciendis sunt officia doloribus, soluta ratione id
                reprehenderit
                autem
                temporibus cupiditate necessitatibus atque similique quam ex
                minus,
                sint
                ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                perferendis.
                Aliquid, quas.</p>
            <h6 ngbScrollSpyFragment="items-3" class="fw-medium" id="list-item-03">Item 3</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Vel,
                laborum
                reiciendis sunt officia doloribus, soluta ratione id
                reprehenderit
                autem
                temporibus cupiditate necessitatibus atque similique quam ex
                minus,
                sint
                ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                perferendis.
                Aliquid, quas.</p>
            <h6 ngbScrollSpyFragment="items-4" class="fw-medium" id="list-item-04">Item 4</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Vel,
                laborum
                reiciendis sunt officia doloribus, soluta ratione id
                reprehenderit
                autem
                temporibus cupiditate necessitatibus atque similique quam ex
                minus,
                sint
                ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                perferendis.
                Aliquid, quas.</p>
        </div>
    </div>
</div>
</div>`,M=` <div class="row">
<div class="col-md-3 col-sm-4">
    <nav  [ngbScrollSpyMenu]="spy1" id="navbar-example3"
        class="navbar bg-light flex-column align-items-stretch p-3">
        <nav class="nav nav-pills flex-column">
            <a class="nav-link" ngbScrollSpyItem="nested-1">Item 1</a>
            <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" ngbScrollSpyItem="nested-1-1" parent="nested-1">Item 1-1</a>
                <a class="nav-link ms-3 my-1" ngbScrollSpyItem="nested-1-2" parent="nested-1">Item 1-2</a>
            </nav>
            <a class="nav-link"  ngbScrollSpyItem="nested-2">Item 2</a>
            <a class="nav-link" ngbScrollSpyItem="nested-3">Item 3</a>
            <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" ngbScrollSpyItem="nested-3-1" parent="nested-3">Item 3-1</a>
                <a class="nav-link ms-3 my-1" ngbScrollSpyItem="nested-3-2" parent="nested-3">Item 3-2</a>
            </nav>
        </nav>
    </nav>
</div>
<div class="col-md-9 col-sm-8">
    <div ngbScrollSpy #spy1="ngbScrollSpy" data-bs-spy="scroll" data-bs-target="#navbar-example3"
        data-bs-smooth-scroll="true" tabindex="0" class="scrollspy-example-2">
        <div id="item-1">
            <h6 ngbScrollSpyFragment="nested-1" class="fw-medium">Item 1</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores
                explicabo in delectus nostrum aut ab quasi placeat facilis?
                Laborum
                corporis eaque ipsum laboriosam animi possimus.</p>
        </div>
        <div id="item-1-1">
            <h6 ngbScrollSpyFragment="nested-1-1" class="fw-medium">Item 1-1</h6>
            <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat
                minus
                distinctio itaque odit magnam voluptate quos ipsam ab
                provident!
                Facere
                minus aperiam non architecto sequi, temporibus aspernatur
                harum
                consequatur, laboriosam nam ratione adipisci? Doloremque sed
                ducimus
                aliquid dicta beatae! Quasi voluptas aliquam aliquid error
                reiciendis
                enim! Iure obcaecati consequatur harum suscipit delectus.
            </p>
        </div>
        <div id="item-1-2">
            <h6 ngbScrollSpyFragment="nested-1-2" class="fw-medium">Item 1-2</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore
                eius
                consectetur quae modi iste voluptatibus a quidem amet ea
                corporis neque
                non quasi nesciunt sunt numquam minima maiores eveniet
                ratione
                soluta
                temporibus, quam harum nostrum. Laudantium repellat, dolores
                blanditiis
                iusto tempora corrupti. Distinctio, nesciunt. Tenetur
                sapiente
                cumque,
                totam veniam repellat alias quasi, beatae eveniet quas eos,
                ea
                aperiam!
            </p>
        </div>
        <div id="item-2">
            <h6 ngbScrollSpyFragment="nested-2" class="fw-medium">Item 2</h6>
            <p class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eius,
                itaque
                debitis. Numquam facere sunt adipisci dolores ratione quo
                magni.
                Non,
                officiis minima deserunt consequatur, repellendus nihil
                laudantium
                aperiam laborum eaque animi maxime porro saepe nisi quos.
                Corporis hic
                tempore illo reiciendis autem, necessitatibus debitis sed
                molestias.</p>
        </div>
        <div id="item-3">
            <h6 ngbScrollSpyFragment="nested-3" class="fw-medium">Item 3</h6>
            <p class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fuga
                voluptate
                sequi exercitationem voluptatem, commodi dicta nostrum
                atque,
                praesentium consequatur eos at vero animi neque deleniti
                ipsa.
                Aliquid
                facere saepe pariatur porro nihil blanditiis recusandae
                dolor
                fuga?
                Iusto et omnis neque doloremque, cum modi officia facilis
                placeat
                repellendus obcaecati mollitia! Id aperiam officiis vitae.
                Fugit
                quo id
                veritatis commodi maiores numquam nostrum necessitatibus
                eaque,
                quia
                exercitationem distinctio ipsa eum, nihil atque perferendis
                dicta,
                mollitia sed dignissimos incidunt voluptas ab tempore
                laborum?
                Fugiat,
                deserunt. Harum, repellat praesentium! Fuga!</p>
        </div>
        <div id="item-3-1">
            <h6 ngbScrollSpyFragment="nested-3-1" class="fw-medium">Item 3-1</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam
                non
                deleniti saepe voluptate, est praesentium ducimus sapiente
                aut
                dignissimos voluptas blanditiis reiciendis earum accusantium
                id
                ex!</p>
        </div>
        <div id="item-3-2">
            <h6 ngbScrollSpyFragment="nested-3-2" class="fw-medium">Item 3-2</h6>
            <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                est.
                Blanditiis cupiditate voluptate obcaecati eligendi iusto
                amet.
                Cupiditate laborum, itaque laboriosam culpa sunt eligendi.
            </p>
        </div>
    </div>
</div>
</div>`,C=`<nav id="navbar-example2" class="navbar navbar-light bg-light px-3 mb-3">
<ul [ngbScrollSpyMenu]="s" class="nav nav-pills d-sm-flex d-block">
    <li class="nav-item">
        <a class="nav-link" ngbScrollSpyItem="basic-1">First</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" ngbScrollSpyItem="basic-2">Second</a>
    </li>
    <li ngbDropdown class="nav-item dropdown">
        <button ngbDropdownToggle class="nav-link dropdown-toggle" ngbScrollSpyItem="basic-p1" data-bs-toggle="dropdown" href="javascript:void(0);"
        role="button" aria-expanded="false">Dropdown</button>
        <ul ngbDropdownMenu >
            <li><button class="dropdown-item" ngbDropdownItem ngbScrollSpyItem="basic-3" parent="basic-p1">Third</button></li>
            <li><button class="dropdown-item" ngbDropdownItem ngbScrollSpyItem="basic-4" parent="basic-p1">Fourth</button></li>
            <li><hr class="dropdown-divider" /></li>
            <li><button class="dropdown-item" ngbDropdownItem ngbScrollSpyItem="basic-5" parent="basic-p1">Fifth</button></li>
        </ul>
    </li>
</ul>
</nav>
<div ngbScrollSpy #s="ngbScrollSpy" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0"
class="scrollspy-example bg-light p-3 rounded-2"
data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
<h6 ngbScrollSpyFragment="basic-1" class="fw-medium" id="scrollspyHeading1">First heading</h6>
<p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa
    alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio
    magni,Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
    reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
    illum
    vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
    adipisicing elit. Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
</p>
<h6 ngbScrollSpyFragment="basic-2" class="fw-medium" id="scrollspyHeading2">Second heading</h6>
<p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam
    ullam
    perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
    fugit
    sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Aliquam veniam ullam
    perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
    fugit
    sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Aliquam veniam ullam
    perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
    fugit
    sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Aliquam veniam ullam
    perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
    fugit
    sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
    Quidem culpa alias,
    illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni
</p>
<h6 ngbScrollSpyFragment="basic-3" class="fw-medium" id="scrollspyHeading3">Third heading</h6>
<p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nobis
    et
    quaerat asperiores fugit dignissimos rerum qui minus vitae nesciunt nisi
    aspernatur aperiam quidem magnam, cumque repudiandae quod aliquid quo?
</p>
<h6 ngbScrollSpyFragment="basic-4" class="fw-medium" id="scrollspyHeading4">Fourth heading</h6>
<p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora
    pariatur modi corporis aspernatur eveniet?</p>
<h6 ngbScrollSpyFragment="basic-5" class="fw-medium" id="scrollspyHeading5">Fifth heading</h6>
<p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates
    consequuntur ipsum eos, magni vitae tempore suscipit excepturi
    blanditiis!
</p>
</div>`,H=`<div class="bd-example">
<div class="row">
    <div class="col-md-2 col-12">
        <div id="simple-list-example"
            class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
            <a class="p-2 rounded" [ngbScrollSpyItem]="spy2" fragment="items-1">Item 1</a>
            <a class="p-2 rounded" [ngbScrollSpyItem]="spy2" fragment="items-2">Item 2</a>
            <a class="p-2 rounded" [ngbScrollSpyItem]="spy2" fragment="items-3">Item 3</a>
            <a class="p-2 rounded" [ngbScrollSpyItem]="spy2" fragment="items-4">Item 4</a>
            <a class="p-2 rounded" [ngbScrollSpyItem]="spy2" fragment="items-5">Item 5</a>
        </div>
    </div>
    <div class="col-md-10 col-12">
        <div ngbScrollSpy #spy2="ngbScrollSpy" data-bs-spy="scroll" data-bs-target="#simple-list-example"
            data-bs-offset="0" data-bs-smooth-scroll="true"
            class="scrollspy-example-4" tabindex="0">
            <h6 ngbScrollSpyFragment="items-1" class="fw-medium" id="simple-list-item-1">Item 1</h6>
            <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to
                emphasize
                the scrolling and highlighting.</p>
            <h6 ngbScrollSpyFragment="items-2" class="fw-medium" id="simple-list-item-2">Item 2</h6>
            <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to
                emphasize
                the scrolling and highlighting.</p>
            <h6 ngbScrollSpyFragment="items-3" class="fw-medium" id="simple-list-item-3">Item 3</h6>
            <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to
                emphasize
                the scrolling and highlighting.</p>
            <h6 ngbScrollSpyFragment="items-4" class="fw-medium" id="simple-list-item-4">Item 4</h6>
            <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to
                emphasize
                the scrolling and highlighting.</p>
            <h6 ngbScrollSpyFragment="items-5" class="fw-medium" id="simple-list-item-5">Item 5</h6>
            <p class="text-muted">This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to
                emphasize
                the scrolling and highlighting.</p>
        </div>
    </div>
</div>
</div>`;var E=o=>[o,"items-1"],Q=class o{prismCode=d;static \u0275fac=function(r){return new(r||o)};static \u0275cmp=c({type:o,selectors:[["app-scrollspy"]],standalone:!0,features:[h],decls:184,vars:25,consts:[["spy1","ngbScrollSpy"],["spy","ngbScrollSpy"],["s","ngbScrollSpy"],["spy2","ngbScrollSpy"],[1,"row"],[1,"col-xl-12"],[3,"title","prism"],[1,"bd-example"],[1,"col-md-2","col-12"],["id","list-example",1,"list-group",3,"ngbScrollSpyMenu"],[1,"list-group-item","list-group-item-action",3,"ngbScrollSpyItem"],["fragment","items-2",1,"list-group-item","list-group-item-action",3,"ngbScrollSpyItem"],["fragment","items-3",1,"list-group-item","list-group-item-action",3,"ngbScrollSpyItem"],["routerLink",".","fragment","items-4",1,"list-group-item","list-group-item-action",3,"ngbScrollSpyItem"],[1,"col-md-10","col-12"],["ngbScrollSpy","","data-bs-spy","scroll","data-bs-target","#list-example","data-bs-smooth-scroll","true","tabindex","0",1,"scrollspy-example-3"],["id","list-item-01","ngbScrollSpyFragment","items-1",1,"fw-semibold"],[1,"text-muted"],["id","list-item-02","ngbScrollSpyFragment","items-2",1,"fw-semibold"],["id","list-item-03","ngbScrollSpyFragment","items-3",1,"fw-semibold"],["id","list-item-04","ngbScrollSpyFragment","items-4",1,"fw-semibold"],[1,"col-md-3","col-sm-4"],["id","navbar-example3",1,"navbar","bg-light","flex-column","align-items-stretch","p-3",3,"ngbScrollSpyMenu"],["href","javascript:void(0);",1,"nav","nav-pills","flex-column"],["ngbScrollSpyItem","nested-1",1,"nav-link"],[1,"nav","nav-pills","flex-column"],["href","javascript:void(0);","ngbScrollSpyItem","nested-1-1","parent","nested-1",1,"nav-link","ms-3","my-1"],["href","javascript:void(0);","ngbScrollSpyItem","nested-1-2","parent","nested-1",1,"nav-link","ms-3","my-1"],["href","javascript:void(0);","ngbScrollSpyItem","nested-2",1,"nav-link"],["href","javascript:void(0);","ngbScrollSpyItem","nested-3",1,"nav-link"],["href","javascript:void(0);","ngbScrollSpyItem","nested-3-1","parent","nested-3",1,"nav-link","ms-3","my-1"],["href","javascript:void(0);","ngbScrollSpyItem","nested-3-2","parent","nested-3",1,"nav-link","ms-3","my-1"],[1,"col-md-9","col-sm-8"],["ngbScrollSpy","","data-bs-spy","scroll","data-bs-target","#navbar-example3","data-bs-smooth-scroll","true","tabindex","0",1,"scrollspy-example-2"],["id","item-1"],["ngbScrollSpy","",1,"fw-semibold"],["id","item-1-1"],["ngbScrollSpyFragment","nested-1-1",1,"fw-semibold"],["id","item-1-2"],["ngbScrollSpyFragment","nested-1-2",1,"fw-semibold"],["id","item-2"],["ngbScrollSpyFragment","nested-2",1,"fw-semibold"],["id","item-3"],["ngbScrollSpyFragment","nested-3",1,"fw-semibold"],["id","item-3-1"],["ngbScrollSpyFragment","nested-3-1",1,"fw-semibold"],["id","item-3-2"],["ngbScrollSpyFragment","nested-3-2",1,"fw-semibold"],["id","navbar-example2",1,"navbar","navbar-light","bg-light","px-3","mb-3"],[1,"nav","nav-pills","d-sm-flex","d-block",3,"ngbScrollSpyMenu"],[1,"nav-item","mb-1","mb-sm-0"],["ngbScrollSpyItem","basic-1",1,"nav-link"],["ngbScrollSpyItem","basic-2",1,"nav-link"],["ngbDropdown","",1,"nav-item","dropdown"],["ngbDropdownToggle","","ngbScrollSpyItem","basic-p1","data-bs-toggle","dropdown","role","button","aria-expanded","false",1,"nav-link","dropdown-toggle"],["ngbDropdownMenu","",1,"dropdown-menu"],["ngbDropdownItem","","ngbScrollSpyItem","basic-3","parent","basic-p1",1,"dropdown-item"],["ngbDropdownItem","","ngbScrollSpyItem","basic-4","parent","basic-p1",1,"dropdown-item"],[1,"dropdown-divider"],["ngbDropdownItem","","ngbScrollSpyItem","basic-5","parent","basic-p1",1,"dropdown-item"],["ngbScrollSpy","","rootMargin","0px 0px -40%","data-bs-spy","scroll","data-bs-target","#navbar-example2","data-bs-offset","0","data-bs-root-margin","0px 0px -40%","data-bs-smooth-scroll","true","tabindex","0",1,"scrollspy-example","bg-light","p-3","rounded-2"],["ngbScrollSpyFragment","basic-1","id","scrollspyHeading1",1,"fw-semibold"],["ngbScrollSpyFragment","basic-2","id","scrollspyHeading2",1,"fw-semibold"],["ngbScrollSpyFragment","basic-3","id","scrollspyHeading3",1,"fw-semibold"],["ngbScrollSpyFragment","basic-4","id","scrollspyHeading4",1,"fw-semibold"],["ngbScrollSpyFragment","basic-5","id","scrollspyHeading5",1,"fw-semibold"],["id","simple-list-example",1,"d-flex","flex-column","gap-2","simple-list-example-scrollspy","text-center",3,"ngbScrollSpyMenu"],[1,"p-2","rounded",3,"ngbScrollSpyItem"],["fragment","items-2",1,"p-2","rounded",3,"ngbScrollSpyItem"],["fragment","items-3",1,"p-2","rounded",3,"ngbScrollSpyItem"],["fragment","items-4",1,"p-2","rounded",3,"ngbScrollSpyItem"],["fragment","items-5",1,"p-2","rounded",3,"ngbScrollSpyItem"],["ngbScrollSpy","","data-bs-spy","scroll","data-bs-target","#simple-list-example","data-bs-offset","0","data-bs-smooth-scroll","true","tabindex","0",1,"scrollspy-example-4"],["id","simple-list-item-1","ngbScrollSpyFragment","items-1",1,"fw-semibold"],["id","simple-list-item-2","ngbScrollSpyFragment","items-2",1,"fw-semibold"],["id","simple-list-item-3","ngbScrollSpyFragment","items-3",1,"fw-semibold"],["id","simple-list-item-4","ngbScrollSpyFragment","items-4",1,"fw-semibold"],["id","simple-list-item-5","ngbScrollSpyFragment","items-5",1,"fw-semibold"]],template:function(r,u){if(r&1&&(e(0,"div",4)(1,"div",5)(2,"app-showcode-card",6)(3,"div",7)(4,"div",4)(5,"div",8)(6,"div",9)(7,"a",10),t(8,"Item 1"),i(),e(9,"a",11),t(10,"Item 2"),i(),e(11,"a",12),t(12,"Item 3"),i(),e(13,"a",13),t(14,"Item 4"),i()()(),e(15,"div",14)(16,"div",15,0)(18,"h6",16),t(19," Item 1 "),i(),e(20,"p",17),t(21," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. "),i(),e(22,"h6",18),t(23," Item 2 "),i(),e(24,"p",17),t(25," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. "),i(),e(26,"h6",19),t(27," Item 3 "),i(),e(28,"p",17),t(29," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. fugiat numquam saepe incidunt perferendis. Aliquid, quas. "),i(),e(30,"h6",20),t(31," Item 4 "),i(),e(32,"p",17),t(33," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum reiciendis sunt officia doloribus, soluta ratione id reprehenderit autem temporibus cupiditate necessitatibus atque similique quam ex minus, sint ipsum deleniti sed assumenda fugiat numquam saepe incidunt perferendis. Aliquid, quas. "),i()()()()()()()(),e(34,"div",4)(35,"div",5)(36,"app-showcode-card",6)(37,"div",4)(38,"div",21)(39,"nav",22)(40,"nav",23)(41,"a",24),t(42,"Item 1"),i(),e(43,"nav",25)(44,"a",26),t(45,"Item 1-1"),i(),e(46,"a",27),t(47,"Item 1-2"),i()(),e(48,"a",28),t(49,"Item 2"),i(),e(50,"a",29),t(51,"Item 3"),i(),e(52,"nav",25)(53,"a",30),t(54,"Item 3-1"),i(),e(55,"a",31),t(56,"Item 3-2"),i()()()()(),e(57,"div",32)(58,"div",33,1)(60,"div",34)(61,"h6",35,1),t(63," Item 1 "),i(),e(64,"p",17),t(65," Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo in delectus nostrum aut ab quasi placeat facilis? Laborum corporis eaque ipsum laboriosam animi possimus. "),i()(),e(66,"div",36)(67,"h6",37),t(68," Item 1-1 "),i(),e(69,"p",17),t(70," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat minus distinctio itaque odit magnam voluptate quos ipsam ab provident! Facere minus aperiam non architecto sequi, temporibus aspernatur harum consequatur, laboriosam nam ratione adipisci? Doloremque sed ducimus aliquid dicta beatae! Quasi voluptas aliquam aliquid error reiciendis enim! Iure obcaecati consequatur harum suscipit delectus. "),i()(),e(71,"div",38)(72,"h6",39),t(73," Item 1-2 "),i(),e(74,"p",17),t(75," Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius consectetur quae modi iste voluptatibus a quidem amet ea corporis neque non quasi nesciunt sunt numquam minima maiores eveniet ratione soluta temporibus, quam harum nostrum. Laudantium repellat, dolores blanditiis iusto tempora corrupti. Distinctio, nesciunt. Tenetur sapiente cumque, totam veniam repellat alias quasi, beatae eveniet quas eos, ea aperiam! "),i()(),e(76,"div",40)(77,"h6",41),t(78," Item 2 "),i(),e(79,"p",17),t(80," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, itaque debitis. Numquam facere sunt adipisci dolores ratione quo magni. Non, officiis minima deserunt consequatur, repellendus nihil laudantium aperiam laborum eaque animi maxime porro saepe nisi quos. Corporis hic tempore illo reiciendis autem, necessitatibus debitis sed molestias. "),i()(),e(81,"div",42)(82,"h6",43),t(83," Item 3 "),i(),e(84,"p",17),t(85," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptate sequi exercitationem voluptatem, commodi dicta nostrum atque, praesentium consequatur eos at vero animi neque deleniti ipsa. Aliquid facere saepe pariatur porro nihil blanditiis recusandae dolor fuga? Iusto et omnis neque doloremque, cum modi officia facilis placeat repellendus obcaecati mollitia! Id aperiam officiis vitae. Fugit quo id veritatis commodi maiores numquam nostrum necessitatibus eaque, quia exercitationem distinctio ipsa eum, nihil atque perferendis dicta, mollitia sed dignissimos incidunt voluptas ab tempore laborum? Fugiat, deserunt. Harum, repellat praesentium! Fuga! "),i()(),e(86,"div",44)(87,"h6",45),t(88," Item 3-1 "),i(),e(89,"p",17),t(90," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam non deleniti saepe voluptate, est praesentium ducimus sapiente aut dignissimos voluptas blanditiis reiciendis earum accusantium id ex! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptate sequi exercitationem voluptatem, commodi dicta nostrum atque, praesentium consequatur eos at vero animi neque deleniti ipsa. Aliquid facere saepe pariatur porro nihil blanditiis recusandae dolor fuga? Iusto et omnis neque doloremque, cum modi officia facilis placeat repellendus obcaecati mollitia! Id aperiam officiis vitae. Fugit quo id veritatis commodi maiores numquam nostrum necessitatibus eaque, quia exercitationem distinctio ipsa eum, nihil atque perferendis dicta, mollitia sed dignissimos incidunt voluptas ab tempore laborum? Fugiat, deserunt. Harum, repellat praesentium! Fuga! "),i()(),e(91,"div",46)(92,"h6",47),t(93," Item 3-2 "),i(),e(94,"p",17),t(95," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est. Blanditiis cupiditate voluptate obcaecati eligendi iusto amet. Cupiditate laborum, itaque laboriosam culpa sunt eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptate sequi exercitationem voluptatem, commodi dicta nostrum atque, praesentium consequatur eos at vero animi neque deleniti ipsa. Aliquid facere saepe pariatur porro nihil blanditiis recusandae dolor fuga? Iusto et omnis neque doloremque, cum modi officia facilis placeat repellendus obcaecati mollitia! Id aperiam officiis vitae. Fugit quo id veritatis commodi maiores numquam nostrum necessitatibus eaque, quia exercitationem distinctio ipsa eum, nihil atque perferendis dicta, mollitia sed dignissimos incidunt voluptas ab tempore laborum? Fugiat, deserunt. Harum, repellat praesentium! Fuga! "),i()()()()()()()(),e(96,"div",4)(97,"div",5)(98,"app-showcode-card",6)(99,"nav",48)(100,"ul",49)(101,"li",50)(102,"a",51),t(103,"First"),i()(),e(104,"li",50)(105,"a",52),t(106,"Second"),i()(),e(107,"li",53)(108,"a",54),t(109,"Dropdown"),i(),e(110,"ul",55)(111,"li")(112,"a",56),t(113,"Third"),i()(),e(114,"li")(115,"a",57),t(116,"Fourth"),i()(),e(117,"li"),g(118,"hr",58),i(),e(119,"li")(120,"a",59),t(121,"Fifth"),i()()()()()(),e(122,"div",60,2)(124,"h6",61),t(125,"First heading"),i(),e(126,"p",17),t(127," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit illum vero veniam harum quas suntLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni, "),i(),e(128,"h6",62),t(129,"Second heading"),i(),e(130,"p",17),t(131," Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam ullam perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum fugit sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias, illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni "),i(),e(132,"h6",63),t(133,"Third heading"),i(),e(134,"p",17),t(135," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nobis et quaerat asperiores fugit dignissimos rerum qui minus vitae nesciunt nisi aspernatur aperiam quidem magnam, cumque repudiandae quod aliquid quo? "),i(),e(136,"h6",64),t(137,"Fourth heading"),i(),e(138,"p",17),t(139," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora pariatur modi corporis aspernatur eveniet? "),i(),e(140,"h6",65),t(141,"Fifth heading"),i(),e(142,"p",17),t(143," Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates consequuntur ipsum eos, magni vitae tempore suscipit excepturi blanditiis! "),i()()()()(),e(144,"div",4)(145,"div",5)(146,"app-showcode-card",6)(147,"div",7)(148,"div",4)(149,"div",8)(150,"div",66)(151,"a",67),t(152,"Item 1"),i(),e(153,"a",68),t(154,"Item 2"),i(),e(155,"a",69),t(156,"Item 3"),i(),e(157,"a",70),t(158,"Item 4"),i(),e(159,"a",71),t(160,"Item 5"),i()()(),e(161,"div",14)(162,"div",72,3)(164,"h6",73),t(165," Item 1 "),i(),e(166,"p",17),t(167," This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting. "),i(),e(168,"h6",74),t(169," Item 2 "),i(),e(170,"p",17),t(171," This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting. "),i(),e(172,"h6",75),t(173," Item 3 "),i(),e(174,"p",17),t(175," This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting. "),i(),e(176,"h6",76),t(177," Item 4 "),i(),e(178,"p",17),t(179," This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting. "),i(),e(180,"h6",77),t(181," Item 5 "),i(),e(182,"p",17),t(183," This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting. "),i()()()()()()()()),r&2){let m=l(17),k=l(59),D=l(123),n=l(163);a(2),s("title","List group")("prism",u.prismCode.scrollspy1),a(4),s("ngbScrollSpyMenu",m),a(),s("ngbScrollSpyItem",p(21,E,m)),a(2),s("ngbScrollSpyItem",m),a(2),s("ngbScrollSpyItem",m),a(2),s("ngbScrollSpyItem",m),a(23),s("title","Nested nav")("prism",u.prismCode.scrollspy2),a(3),s("ngbScrollSpyMenu",k),a(59),s("title","Example in navbar")("prism",u.prismCode.scrollspy3),a(2),s("ngbScrollSpyMenu",D),a(46),s("title","Simple anchors")("prism",u.prismCode.scrollspy4),a(4),s("ngbScrollSpyMenu",n),a(),s("ngbScrollSpyItem",p(23,E,n)),a(2),s("ngbScrollSpyItem",n),a(2),s("ngbScrollSpyItem",n),a(2),s("ngbScrollSpyItem",n),a(2),s("ngbScrollSpyItem",n)}},dependencies:[L,f,S,v,b,x,q,I,y,w,F]})};export{Q as ScrollspyComponent};
