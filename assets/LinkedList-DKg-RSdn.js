import{j as e,L as n}from"./index-DQ3FoKqk.js";import{S as l}from"./SEOHead-ZmeIlSyn.js";import{u as s}from"./useAOS-CRA2ZcoE.js";const p=()=>(s(),e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"연결 리스트 (Linked List) | DS Study",description:"연결 리스트의 개념, 노드 구조, 단일/이중/원형 연결 리스트, 배열과의 비교를 학습합니다."}),e.jsx("div",{className:"page-header",style:{background:"var(--hero-bg)",color:"#fff",padding:"calc(var(--nav-height) + 40px) 0 60px"},children:e.jsxs("div",{className:"container",children:[e.jsx("p",{style:{fontSize:"14px",opacity:.8,marginBottom:"8px"},children:"선형 자료구조"}),e.jsx("h1",{style:{fontSize:"48px",fontWeight:700,marginBottom:"16px"},children:"연결 리스트 (Linked List)"}),e.jsx("p",{style:{fontSize:"18px",opacity:.9,maxWidth:"700px",lineHeight:1.7},children:"연결 리스트는 각 요소(노드)가 데이터와 다음 노드를 가리키는 포인터로 구성된 자료구조입니다."})]})}),e.jsx("div",{className:"lesson-content",style:{padding:"var(--section-padding) 0"},children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",style:{maxWidth:"860px",margin:"0 auto"},children:[e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"연결 리스트의 개념"}),e.jsxs("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"16px"},children:["연결 리스트(Linked List)는 데이터를 저장하는 노드(Node)들이 ",e.jsx("strong",{children:"포인터(참조)"}),"를 통해 서로 연결된 선형 자료구조입니다. 배열과 달리 메모리 상에서 연속적으로 저장될 필요가 없으며, 각 노드는 어디에나 위치할 수 있습니다."]}),e.jsxs("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8},children:["연결 리스트의 첫 번째 노드를 ",e.jsx("strong",{children:"헤드(Head)"}),"라고 하며, 마지막 노드의 다음 포인터는 ",e.jsx("code",{style:{background:"var(--bg-light-gray)",padding:"2px 6px",borderRadius:"4px",fontSize:"14px"},children:"None"}),"(null)을 가리킵니다."]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"노드 구조"}),e.jsxs("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"20px"},children:["연결 리스트의 기본 단위인 노드는 두 가지 필드로 구성됩니다: 데이터를 저장하는 ",e.jsx("strong",{children:"data"})," 필드와 다음 노드를 가리키는 ",e.jsx("strong",{children:"next"})," 포인터입니다."]}),e.jsxs("div",{className:"code-block",style:{background:"#1e293b",borderRadius:"var(--radius-md)",overflow:"hidden",marginBottom:"24px"},children:[e.jsx("div",{className:"code-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",background:"#334155",fontSize:"13px",color:"#94a3b8"},children:e.jsx("span",{children:"Python - Node 클래스"})}),e.jsx("pre",{style:{padding:"20px",color:"#e2e8f0",fontSize:"14px",lineHeight:1.7,overflow:"auto",margin:0},children:`class Node:
    """연결 리스트의 노드"""
    def __init__(self, data):
        self.data = data    # 데이터 저장
        self.next = None    # 다음 노드를 가리키는 포인터`})]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"단일 연결 리스트 (Singly Linked List)"}),e.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"20px"},children:"각 노드가 다음 노드만을 가리키는 가장 기본적인 연결 리스트입니다. 한 방향으로만 탐색이 가능하며, 이전 노드로 돌아갈 수 없습니다."}),e.jsxs("div",{className:"code-block",style:{background:"#1e293b",borderRadius:"var(--radius-md)",overflow:"hidden",marginBottom:"24px"},children:[e.jsx("div",{className:"code-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",background:"#334155",fontSize:"13px",color:"#94a3b8"},children:e.jsx("span",{children:"Python - 단일 연결 리스트 구현"})}),e.jsx("pre",{style:{padding:"20px",color:"#e2e8f0",fontSize:"14px",lineHeight:1.7,overflow:"auto",margin:0},children:`class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        """끝에 노드 추가"""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def prepend(self, data):
        """앞에 노드 추가"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete(self, data):
        """특정 값의 노드 삭제"""
        if not self.head:
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def display(self):
        """리스트 출력"""
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        print(" -> ".join(elements) + " -> None")

# 사용 예시
ll = SinglyLinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.prepend(5)
ll.display()    # 5 -> 10 -> 20 -> 30 -> None

ll.delete(20)
ll.display()    # 5 -> 10 -> 30 -> None`})]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"이중 연결 리스트 (Doubly Linked List)"}),e.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"20px"},children:"각 노드가 이전 노드(prev)와 다음 노드(next) 모두를 가리키는 연결 리스트입니다. 양방향 탐색이 가능하지만, 추가 메모리가 필요합니다."}),e.jsxs("div",{className:"code-block",style:{background:"#1e293b",borderRadius:"var(--radius-md)",overflow:"hidden",marginBottom:"24px"},children:[e.jsx("div",{className:"code-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",background:"#334155",fontSize:"13px",color:"#94a3b8"},children:e.jsx("span",{children:"Python - 이중 연결 리스트 노드"})}),e.jsx("pre",{style:{padding:"20px",color:"#e2e8f0",fontSize:"14px",lineHeight:1.7,overflow:"auto",margin:0},children:`class DoublyNode:
    """이중 연결 리스트의 노드"""
    def __init__(self, data):
        self.data = data
        self.prev = None    # 이전 노드
        self.next = None    # 다음 노드

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, data):
        """끝에 노드 추가"""
        new_node = DoublyNode(data)
        if not self.head:
            self.head = new_node
            self.tail = new_node
            return
        new_node.prev = self.tail
        self.tail.next = new_node
        self.tail = new_node

    def display_forward(self):
        """정방향 출력"""
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        print(" <-> ".join(elements))

    def display_backward(self):
        """역방향 출력"""
        elements = []
        current = self.tail
        while current:
            elements.append(str(current.data))
            current = current.prev
        print(" <-> ".join(elements))`})]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"원형 연결 리스트 (Circular Linked List)"}),e.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"20px"},children:"마지막 노드의 next 포인터가 첫 번째 노드(head)를 가리켜 원형 구조를 이루는 연결 리스트입니다. 라운드 로빈 스케줄링, 순환 큐 구현 등에 활용됩니다."}),e.jsxs("div",{className:"callout-box",style:{background:"var(--primary-blue-bg)",border:"1px solid var(--primary-blue)",borderRadius:"var(--radius-md)",padding:"24px 28px",marginBottom:"24px"},children:[e.jsx("h4",{style:{color:"var(--primary-blue)",fontWeight:700,marginBottom:"12px",fontSize:"16px"},children:"원형 연결 리스트의 특징"}),e.jsxs("ul",{style:{color:"var(--text-secondary)",lineHeight:2,paddingLeft:"20px",margin:0},children:[e.jsx("li",{children:"끝이 없으므로 어떤 노드에서든 모든 노드에 접근 가능합니다."}),e.jsx("li",{children:"마지막 노드의 next가 head를 가리키므로 종료 조건에 주의해야 합니다."}),e.jsx("li",{children:"단일 원형, 이중 원형 연결 리스트 모두 구현 가능합니다."})]})]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"배열 vs 연결 리스트 비교"}),e.jsxs("table",{className:"lesson-table",style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--primary-blue)",color:"#fff"},children:[e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600,whiteSpace:"nowrap"},children:"항목"}),e.jsx("th",{style:{padding:"14px 20px",textAlign:"center",fontWeight:600,whiteSpace:"nowrap"},children:"배열"}),e.jsx("th",{style:{padding:"14px 20px",textAlign:"center",fontWeight:600,whiteSpace:"nowrap"},children:"연결 리스트"})]})}),e.jsx("tbody",{children:[["접근","O(1)","O(n)"],["탐색","O(n)","O(n)"],["삽입 (앞)","O(n)","O(1)"],["삽입 (끝)","O(1)*","O(1)**"],["삭제","O(n)","O(1)***"],["메모리 할당","연속적","비연속적"],["크기 변경","비용 큼","용이함"],["추가 메모리","없음","포인터 필요"],["캐시 성능","우수","불리"]].map(([r,i,a],t)=>e.jsxs("tr",{style:{background:t%2===0?"var(--bg-white)":"var(--bg-light-gray)",borderBottom:"1px solid var(--border-light)"},children:[e.jsx("td",{style:{padding:"12px 20px",fontWeight:600,color:"var(--text-primary)",whiteSpace:"nowrap"},children:r}),e.jsx("td",{style:{padding:"12px 20px",textAlign:"center",fontFamily:"monospace",color:"var(--primary-blue)",fontWeight:600},children:i}),e.jsx("td",{style:{padding:"12px 20px",textAlign:"center",fontFamily:"monospace",color:"var(--primary-blue)",fontWeight:600},children:a})]},t))})]}),e.jsx("p",{style:{fontSize:"13px",color:"var(--text-light)",lineHeight:1.7},children:"* 동적 배열 기준 분할 상환 O(1)  |  ** tail 포인터가 있는 경우  |  *** 삭제할 노드의 참조를 이미 알고 있는 경우"})]}),e.jsx("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:e.jsxs("div",{className:"exercise-box",style:{background:"var(--bg-light-gray)",border:"1px solid var(--border-light)",borderRadius:"var(--radius-lg)",padding:"28px 32px"},children:[e.jsx("h3",{style:{fontSize:"20px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"연습 문제"}),e.jsxs("ol",{style:{color:"var(--text-secondary)",lineHeight:2,paddingLeft:"20px",margin:0},children:[e.jsx("li",{children:"단일 연결 리스트에서 특정 값을 검색하는 함수를 작성하세요."}),e.jsx("li",{children:"연결 리스트를 역순으로 뒤집는 함수를 구현하세요."}),e.jsx("li",{children:"두 개의 정렬된 연결 리스트를 병합하는 함수를 작성하세요."}),e.jsx("li",{children:"연결 리스트에서 순환(cycle)이 있는지 판별하는 알고리즘을 구현하세요."})]})]})}),e.jsxs("nav",{className:"lesson-nav","data-aos":"fade-up",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px 0",borderTop:"1px solid var(--border-light)"},children:[e.jsxs(n,{to:"/linear/array",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 24px",background:"var(--bg-light-gray)",color:"var(--text-primary)",borderRadius:"var(--radius-md)",textDecoration:"none",fontWeight:600,fontSize:"15px",transition:"var(--transition-base)"},children:[e.jsx("span",{style:{fontSize:"18px"},children:"←"}),"이전: 배열"]}),e.jsxs(n,{to:"/linear/stack",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 24px",background:"var(--primary-blue)",color:"#fff",borderRadius:"var(--radius-md)",textDecoration:"none",fontWeight:600,fontSize:"15px",transition:"var(--transition-base)"},children:["다음: 스택",e.jsx("span",{style:{fontSize:"18px"},children:"→"})]})]})]})})})]}));export{p as default};
