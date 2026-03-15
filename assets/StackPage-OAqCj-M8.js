import{j as e,L as i}from"./index-DQ3FoKqk.js";import{S as a}from"./SEOHead-ZmeIlSyn.js";import{u as o}from"./useAOS-CRA2ZcoE.js";const x=()=>(o(),e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"스택 (Stack) | DS Study",description:"스택의 개념(LIFO), 주요 연산, 활용 사례, Python 구현을 학습합니다."}),e.jsx("div",{className:"page-header",style:{background:"var(--hero-bg)",color:"#fff",padding:"calc(var(--nav-height) + 40px) 0 60px"},children:e.jsxs("div",{className:"container",children:[e.jsx("p",{style:{fontSize:"14px",opacity:.8,marginBottom:"8px"},children:"선형 자료구조"}),e.jsx("h1",{style:{fontSize:"48px",fontWeight:700,marginBottom:"16px"},children:"스택 (Stack)"}),e.jsx("p",{style:{fontSize:"18px",opacity:.9,maxWidth:"700px",lineHeight:1.7},children:"스택은 후입선출(LIFO) 원칙을 따르는 자료구조로, 가장 나중에 삽입된 데이터가 가장 먼저 제거됩니다."})]})}),e.jsx("div",{className:"lesson-content",style:{padding:"var(--section-padding) 0"},children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",style:{maxWidth:"860px",margin:"0 auto"},children:[e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"스택의 개념 (LIFO)"}),e.jsxs("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"16px"},children:["스택(Stack)은 ",e.jsx("strong",{children:"후입선출(LIFO: Last In, First Out)"})," 원칙을 따르는 선형 자료구조입니다. 접시를 쌓아놓은 것처럼, 가장 마지막에 넣은 데이터를 가장 먼저 꺼낼 수 있습니다."]}),e.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8},children:"스택은 데이터의 삽입과 삭제가 한쪽 끝(top)에서만 이루어지며, 이 특성 때문에 함수 호출 관리, 수식 계산, 되돌리기(Undo) 등 다양한 분야에서 활용됩니다."})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"주요 연산"}),e.jsxs("table",{className:"lesson-table",style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--primary-blue)",color:"#fff"},children:[e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600,whiteSpace:"nowrap"},children:"연산"}),e.jsx("th",{style:{padding:"14px 20px",textAlign:"center",fontWeight:600,whiteSpace:"nowrap"},children:"시간 복잡도"}),e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600},children:"설명"})]})}),e.jsx("tbody",{children:[["push(item)","O(1)","스택의 맨 위에 요소를 추가합니다."],["pop()","O(1)","스택의 맨 위 요소를 제거하고 반환합니다."],["peek() / top()","O(1)","스택의 맨 위 요소를 제거하지 않고 반환합니다."],["isEmpty()","O(1)","스택이 비어있는지 확인합니다."],["size()","O(1)","스택에 들어있는 요소의 개수를 반환합니다."]].map(([r,s,n],t)=>e.jsxs("tr",{style:{background:t%2===0?"var(--bg-white)":"var(--bg-light-gray)",borderBottom:"1px solid var(--border-light)"},children:[e.jsx("td",{style:{padding:"12px 20px",fontWeight:600,color:"var(--text-primary)",fontFamily:"monospace",whiteSpace:"nowrap"},children:r}),e.jsx("td",{style:{padding:"12px 20px",textAlign:"center",fontFamily:"monospace",color:"var(--primary-blue)",fontWeight:700},children:s}),e.jsx("td",{style:{padding:"12px 20px",color:"var(--text-secondary)"},children:n})]},t))})]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"스택의 활용"}),e.jsxs("div",{className:"callout-box",style:{background:"var(--primary-blue-bg)",border:"1px solid var(--primary-blue)",borderRadius:"var(--radius-md)",padding:"24px 28px",marginBottom:"24px"},children:[e.jsx("h4",{style:{color:"var(--primary-blue)",fontWeight:700,marginBottom:"12px",fontSize:"16px"},children:"스택이 활용되는 대표적인 사례"}),e.jsxs("ul",{style:{color:"var(--text-secondary)",lineHeight:2,paddingLeft:"20px",margin:0},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"괄호 검사"})," : 여는 괄호를 push하고, 닫는 괄호를 만나면 pop하여 짝이 맞는지 확인합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"후위 표기법 (Postfix) 계산"})," : 피연산자를 push하고, 연산자를 만나면 pop하여 계산합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DFS (깊이 우선 탐색)"})," : 그래프 탐색에서 방문할 노드를 스택에 저장합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"함수 호출 스택"})," : 프로그램 실행 시 함수 호출/복귀를 관리합니다."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"되돌리기(Undo)"})," : 작업 이력을 스택에 저장하여 되돌리기 기능을 구현합니다."]})]})]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"스택 구현"}),e.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"20px"},children:"Python에서 스택은 리스트를 이용하여 간단하게 구현할 수 있습니다. 클래스로 감싸서 명확한 인터페이스를 제공하는 것이 좋습니다."}),e.jsxs("div",{className:"code-block",style:{background:"#1e293b",borderRadius:"var(--radius-md)",overflow:"hidden",marginBottom:"24px"},children:[e.jsx("div",{className:"code-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",background:"#334155",fontSize:"13px",color:"#94a3b8"},children:e.jsx("span",{children:"Python - 스택 클래스 구현"})}),e.jsx("pre",{style:{padding:"20px",color:"#e2e8f0",fontSize:"14px",lineHeight:1.7,overflow:"auto",margin:0},children:`class Stack:
    """리스트 기반 스택 구현"""
    def __init__(self):
        self.items = []

    def push(self, item):
        """스택에 요소 추가"""
        self.items.append(item)

    def pop(self):
        """스택에서 요소 제거 및 반환"""
        if self.is_empty():
            raise IndexError("스택이 비어있습니다")
        return self.items.pop()

    def peek(self):
        """스택의 맨 위 요소 확인"""
        if self.is_empty():
            raise IndexError("스택이 비어있습니다")
        return self.items[-1]

    def is_empty(self):
        """스택이 비어있는지 확인"""
        return len(self.items) == 0

    def size(self):
        """스택의 크기 반환"""
        return len(self.items)

# 사용 예시
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)

print(stack.peek())   # 30
print(stack.pop())    # 30
print(stack.pop())    # 20
print(stack.size())   # 1`})]}),e.jsx("h3",{style:{fontSize:"22px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px",marginTop:"32px"},children:"괄호 검사 예제"}),e.jsxs("div",{className:"code-block",style:{background:"#1e293b",borderRadius:"var(--radius-md)",overflow:"hidden",marginBottom:"24px"},children:[e.jsx("div",{className:"code-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",background:"#334155",fontSize:"13px",color:"#94a3b8"},children:e.jsx("span",{children:"Python - 괄호 유효성 검사"})}),e.jsx("pre",{style:{padding:"20px",color:"#e2e8f0",fontSize:"14px",lineHeight:1.7,overflow:"auto",margin:0},children:`def is_valid_parentheses(s):
    """괄호 문자열의 유효성을 검사하는 함수"""
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}

    for char in s:
        if char in '([{':
            stack.append(char)
        elif char in ')]}':
            if not stack or stack[-1] != pairs[char]:
                return False
            stack.pop()

    return len(stack) == 0

# 테스트
print(is_valid_parentheses("({[]})"))   # True
print(is_valid_parentheses("([)]"))     # False
print(is_valid_parentheses("((()))"))   # True
print(is_valid_parentheses("(()"))      # False`})]})]}),e.jsx("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:e.jsxs("div",{className:"exercise-box",style:{background:"var(--bg-light-gray)",border:"1px solid var(--border-light)",borderRadius:"var(--radius-lg)",padding:"28px 32px"},children:[e.jsx("h3",{style:{fontSize:"20px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"연습 문제"}),e.jsxs("ol",{style:{color:"var(--text-secondary)",lineHeight:2,paddingLeft:"20px",margin:0},children:[e.jsxs("li",{children:["후위 표기법 수식 ",e.jsx("code",{style:{background:"#e2e8f0",padding:"2px 6px",borderRadius:"4px",fontSize:"14px"},children:'"3 4 + 2 *"'}),"을 스택을 이용해 계산하는 함수를 작성하세요."]}),e.jsx("li",{children:"스택 두 개를 이용하여 큐를 구현하세요."}),e.jsx("li",{children:"문자열을 스택을 이용하여 뒤집는 함수를 작성하세요."}),e.jsx("li",{children:"스택을 이용해 10진수를 2진수로 변환하는 함수를 구현하세요."})]})]})}),e.jsxs("nav",{className:"lesson-nav","data-aos":"fade-up",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px 0",borderTop:"1px solid var(--border-light)"},children:[e.jsxs(i,{to:"/linear/linked-list",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 24px",background:"var(--bg-light-gray)",color:"var(--text-primary)",borderRadius:"var(--radius-md)",textDecoration:"none",fontWeight:600,fontSize:"15px",transition:"var(--transition-base)"},children:[e.jsx("span",{style:{fontSize:"18px"},children:"←"}),"이전: 연결 리스트"]}),e.jsxs(i,{to:"/linear/queue",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 24px",background:"var(--primary-blue)",color:"#fff",borderRadius:"var(--radius-md)",textDecoration:"none",fontWeight:600,fontSize:"15px",transition:"var(--transition-base)"},children:["다음: 큐",e.jsx("span",{style:{fontSize:"18px"},children:"→"})]})]})]})})})]}));export{x as default};
