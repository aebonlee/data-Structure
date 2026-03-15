import{j as e,L as n}from"./index-DQ3FoKqk.js";import{S as l}from"./SEOHead-ZmeIlSyn.js";import{u as s}from"./useAOS-CRA2ZcoE.js";const p=()=>(s(),e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"이진 트리 (Binary Tree) | DS Study",description:"이진 트리의 정의, 종류(완전, 포화, 편향), 성질, 배열/연결 리스트 구현, 순회를 학습합니다."}),e.jsx("div",{className:"page-header",style:{background:"var(--hero-bg)",color:"#fff",padding:"calc(var(--nav-height) + 40px) 0 60px"},children:e.jsxs("div",{className:"container",children:[e.jsx("p",{style:{fontSize:"14px",opacity:.8,marginBottom:"8px"},children:"비선형 자료구조"}),e.jsx("h1",{style:{fontSize:"48px",fontWeight:700,marginBottom:"16px"},children:"이진 트리 (Binary Tree)"}),e.jsx("p",{style:{fontSize:"18px",opacity:.9,maxWidth:"700px",lineHeight:1.7},children:"이진 트리는 각 노드가 최대 두 개의 자식 노드를 가지는 트리 구조입니다. 컴퓨터 과학에서 가장 널리 사용되는 트리 형태이며, 다양한 자료구조의 기반이 됩니다."})]})}),e.jsx("div",{className:"lesson-content",style:{padding:"var(--section-padding) 0"},children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",style:{maxWidth:"860px",margin:"0 auto"},children:[e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"이진 트리의 정의"}),e.jsxs("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"16px"},children:["이진 트리(Binary Tree)는 모든 노드가 ",e.jsx("strong",{children:"최대 2개의 자식 노드"}),"(왼쪽 자식, 오른쪽 자식)를 가질 수 있는 트리입니다. 일반 트리와 달리 자식의 위치(왼쪽/오른쪽)가 구분됩니다."]}),e.jsxs("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8},children:["재귀적 정의: 이진 트리는 ",e.jsx("strong",{children:"공집합이거나"}),", 루트와 왼쪽 서브트리, 오른쪽 서브트리로 구성된 노드들의 유한 집합입니다. 이때 왼쪽과 오른쪽 서브트리도 이진 트리입니다."]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"이진 트리의 종류"}),e.jsxs("table",{className:"lesson-table",style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--primary-blue)",color:"#fff"},children:[e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600,whiteSpace:"nowrap"},children:"종류"}),e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600},children:"정의"}),e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600},children:"특징"})]})}),e.jsx("tbody",{children:[["완전 이진 트리 (Complete)","마지막 레벨을 제외한 모든 레벨이 완전히 채워지고, 마지막 레벨은 왼쪽부터 채워진 트리","배열로 효율적 표현 가능, 힙에 사용"],["포화 이진 트리 (Perfect)","모든 레벨이 완전히 채워진 트리","높이 h일 때 노드 수: 2^(h+1) - 1"],["편향 이진 트리 (Skewed)","모든 노드가 한쪽 방향으로만 자식을 가지는 트리","사실상 연결 리스트와 동일, 최악의 성능"],["정 이진 트리 (Strict)","모든 노드가 0개 또는 2개의 자식을 가지는 트리","리프 노드 수 = 내부 노드 수 + 1"]].map(([i,o,t],r)=>e.jsxs("tr",{style:{background:r%2===0?"var(--bg-white)":"var(--bg-light-gray)",borderBottom:"1px solid var(--border-light)"},children:[e.jsx("td",{style:{padding:"12px 20px",fontWeight:600,color:"var(--text-primary)",whiteSpace:"nowrap"},children:i}),e.jsx("td",{style:{padding:"12px 20px",color:"var(--text-secondary)"},children:o}),e.jsx("td",{style:{padding:"12px 20px",color:"var(--text-secondary)"},children:t})]},r))})]}),e.jsxs("div",{className:"callout-box",style:{background:"var(--primary-blue-bg)",border:"1px solid var(--primary-blue)",borderRadius:"var(--radius-md)",padding:"24px 28px",marginBottom:"24px"},children:[e.jsx("h4",{style:{color:"var(--primary-blue)",fontWeight:700,marginBottom:"12px",fontSize:"16px"},children:"완전 이진 트리 vs 포화 이진 트리"}),e.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.8,margin:0},children:"포화 이진 트리는 완전 이진 트리의 특수한 경우입니다. 포화 이진 트리는 모든 레벨이 꽉 차 있지만, 완전 이진 트리는 마지막 레벨만 왼쪽부터 순서대로 채워지면 됩니다."})]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"이진 트리의 성질"}),e.jsxs("table",{className:"lesson-table",style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--primary-blue)",color:"#fff"},children:[e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600},children:"성질"}),e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600},children:"설명"})]})}),e.jsx("tbody",{children:[["레벨 i의 최대 노드 수","2^i (루트 레벨 = 0)"],["높이 h인 이진 트리의 최대 노드 수","2^(h+1) - 1"],["높이 h인 이진 트리의 최소 노드 수","h + 1 (편향 트리)"],["n개 노드의 이진 트리 최소 높이","floor(log2(n))"],["n개 노드의 이진 트리 최대 높이","n - 1 (편향 트리)"],["리프 노드 수(n0)와 차수 2 노드 수(n2)","n0 = n2 + 1"]].map(([i,o],t)=>e.jsxs("tr",{style:{background:t%2===0?"var(--bg-white)":"var(--bg-light-gray)",borderBottom:"1px solid var(--border-light)"},children:[e.jsx("td",{style:{padding:"12px 20px",fontWeight:600,color:"var(--text-primary)"},children:i}),e.jsx("td",{style:{padding:"12px 20px",fontFamily:"monospace",color:"var(--primary-blue)",fontWeight:600},children:o})]},t))})]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"배열로 구현"}),e.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"20px"},children:"완전 이진 트리는 배열을 사용하여 효율적으로 표현할 수 있습니다. 인덱스를 통해 부모-자식 관계를 쉽게 계산할 수 있습니다."}),e.jsxs("table",{className:"lesson-table",style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--primary-blue)",color:"#fff"},children:[e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600},children:"관계"}),e.jsx("th",{style:{padding:"14px 20px",textAlign:"center",fontWeight:600},children:"인덱스 (0-based)"}),e.jsx("th",{style:{padding:"14px 20px",textAlign:"center",fontWeight:600},children:"인덱스 (1-based)"})]})}),e.jsx("tbody",{children:[["부모","(i - 1) // 2","i // 2"],["왼쪽 자식","2 * i + 1","2 * i"],["오른쪽 자식","2 * i + 2","2 * i + 1"]].map(([i,o,t],r)=>e.jsxs("tr",{style:{background:r%2===0?"var(--bg-white)":"var(--bg-light-gray)",borderBottom:"1px solid var(--border-light)"},children:[e.jsx("td",{style:{padding:"12px 20px",fontWeight:600,color:"var(--text-primary)"},children:i}),e.jsx("td",{style:{padding:"12px 20px",textAlign:"center",fontFamily:"monospace",color:"var(--primary-blue)",fontWeight:600},children:o}),e.jsx("td",{style:{padding:"12px 20px",textAlign:"center",fontFamily:"monospace",color:"var(--primary-blue)",fontWeight:600},children:t})]},r))})]}),e.jsxs("div",{className:"code-block",style:{background:"#1e293b",borderRadius:"var(--radius-md)",overflow:"hidden",marginBottom:"24px"},children:[e.jsx("div",{className:"code-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",background:"#334155",fontSize:"13px",color:"#94a3b8"},children:e.jsx("span",{children:"Python - 배열 기반 이진 트리"})}),e.jsx("pre",{style:{padding:"20px",color:"#e2e8f0",fontSize:"14px",lineHeight:1.7,overflow:"auto",margin:0},children:`class ArrayBinaryTree:
    """배열 기반 이진 트리 (0-based 인덱스)"""

    def __init__(self, capacity=100):
        self.tree = [None] * capacity
        self.size = 0

    def set_root(self, data):
        """루트 설정"""
        self.tree[0] = data
        self.size = max(self.size, 1)

    def set_left(self, parent_idx, data):
        """왼쪽 자식 설정"""
        left_idx = 2 * parent_idx + 1
        if self.tree[parent_idx] is None:
            print(f"부모 노드(인덱스 {parent_idx})가 비어있습니다.")
            return
        self.tree[left_idx] = data
        self.size = max(self.size, left_idx + 1)

    def set_right(self, parent_idx, data):
        """오른쪽 자식 설정"""
        right_idx = 2 * parent_idx + 2
        if self.tree[parent_idx] is None:
            print(f"부모 노드(인덱스 {parent_idx})가 비어있습니다.")
            return
        self.tree[right_idx] = data
        self.size = max(self.size, right_idx + 1)

    def inorder(self, idx=0):
        """중위 순회"""
        if idx >= len(self.tree) or self.tree[idx] is None:
            return []
        left = self.inorder(2 * idx + 1)
        right = self.inorder(2 * idx + 2)
        return left + [self.tree[idx]] + right


# 사용 예시:  1 -> [2, 3] -> [4, 5, -, -]
bt = ArrayBinaryTree()
bt.set_root(1)
bt.set_left(0, 2)
bt.set_right(0, 3)
bt.set_left(1, 4)
bt.set_right(1, 5)

print([bt.tree[i] for i in range(bt.size)])  # [1, 2, 3, 4, 5]
print("중위 순회:", bt.inorder())  # [4, 2, 5, 1, 3]`})]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"연결 리스트로 구현"}),e.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"20px"},children:"연결 리스트(포인터) 방식은 메모리를 동적으로 할당하며, 편향 트리에서도 공간 낭비가 없습니다."}),e.jsxs("div",{className:"code-block",style:{background:"#1e293b",borderRadius:"var(--radius-md)",overflow:"hidden",marginBottom:"24px"},children:[e.jsx("div",{className:"code-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",background:"#334155",fontSize:"13px",color:"#94a3b8"},children:e.jsx("span",{children:"Python - 연결 리스트 기반 이진 트리"})}),e.jsx("pre",{style:{padding:"20px",color:"#e2e8f0",fontSize:"14px",lineHeight:1.7,overflow:"auto",margin:0},children:`class Node:
    """이진 트리 노드"""
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class LinkedBinaryTree:
    """연결 리스트 기반 이진 트리"""

    def __init__(self):
        self.root = None

    def height(self, node=None):
        """트리의 높이 계산"""
        if node is None:
            return -1
        return 1 + max(self.height(node.left), self.height(node.right))

    def count_nodes(self, node=None):
        """노드 개수 세기"""
        if node is None:
            return 0
        return 1 + self.count_nodes(node.left) + self.count_nodes(node.right)

    def count_leaves(self, node=None):
        """리프 노드 개수 세기"""
        if node is None:
            return 0
        if node.left is None and node.right is None:
            return 1
        return self.count_leaves(node.left) + self.count_leaves(node.right)


# 트리 구성
tree = LinkedBinaryTree()
tree.root = Node(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)
tree.root.right.right = Node(6)

print(f"트리 높이: {tree.height(tree.root)}")        # 2
print(f"노드 개수: {tree.count_nodes(tree.root)}")    # 6
print(f"리프 노드 수: {tree.count_leaves(tree.root)}") # 3`})]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"순회 구현 (반복적 방법)"}),e.jsx("p",{style:{fontSize:"16px",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"20px"},children:"재귀적 순회 외에도, 스택과 큐를 활용한 반복적(iterative) 순회 방법이 있습니다. 반복적 방법은 깊은 트리에서 스택 오버플로를 방지할 수 있습니다."}),e.jsxs("div",{className:"code-block",style:{background:"#1e293b",borderRadius:"var(--radius-md)",overflow:"hidden",marginBottom:"24px"},children:[e.jsx("div",{className:"code-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",background:"#334155",fontSize:"13px",color:"#94a3b8"},children:e.jsx("span",{children:"Python - 반복적 순회 구현"})}),e.jsx("pre",{style:{padding:"20px",color:"#e2e8f0",fontSize:"14px",lineHeight:1.7,overflow:"auto",margin:0},children:`from collections import deque

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def iterative_preorder(root):
    """반복적 전위 순회 (스택 사용)"""
    if root is None:
        return []
    result = []
    stack = [root]
    while stack:
        node = stack.pop()
        result.append(node.data)
        # 스택은 LIFO이므로 오른쪽을 먼저 push
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
    return result


def iterative_inorder(root):
    """반복적 중위 순회 (스택 사용)"""
    result = []
    stack = []
    current = root
    while current or stack:
        while current:
            stack.append(current)
            current = current.left
        current = stack.pop()
        result.append(current.data)
        current = current.right
    return result


def level_order_by_level(root):
    """레벨별로 분리된 레벨 순회"""
    if root is None:
        return []
    result = []
    queue = deque([root])
    while queue:
        level_size = len(queue)
        level = []
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.data)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result


# 트리 구성
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.right = Node(6)

print("반복 전위:", iterative_preorder(root))   # [1, 2, 4, 5, 3, 6]
print("반복 중위:", iterative_inorder(root))    # [4, 2, 5, 1, 3, 6]
print("레벨별:", level_order_by_level(root))    # [[1], [2, 3], [4, 5, 6]]`})]})]}),e.jsxs("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"배열 vs 연결 리스트 구현 비교"}),e.jsxs("table",{className:"lesson-table",style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--primary-blue)",color:"#fff"},children:[e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600},children:"기준"}),e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600},children:"배열 구현"}),e.jsx("th",{style:{padding:"14px 20px",textAlign:"left",fontWeight:600},children:"연결 리스트 구현"})]})}),e.jsx("tbody",{children:[["메모리","고정 크기, 편향 트리 시 낭비","동적 할당, 낭비 없음"],["부모/자식 접근","O(1) - 인덱스 계산","O(1) - 포인터 참조"],["삽입/삭제","복잡함 (배열 재구성 필요)","간단함 (포인터 변경)"],["적합한 경우","완전 이진 트리, 힙","일반 이진 트리, BST"],["캐시 효율","높음 (연속 메모리)","낮음 (분산 메모리)"]].map(([i,o,t],r)=>e.jsxs("tr",{style:{background:r%2===0?"var(--bg-white)":"var(--bg-light-gray)",borderBottom:"1px solid var(--border-light)"},children:[e.jsx("td",{style:{padding:"12px 20px",fontWeight:600,color:"var(--text-primary)",whiteSpace:"nowrap"},children:i}),e.jsx("td",{style:{padding:"12px 20px",color:"var(--text-secondary)"},children:o}),e.jsx("td",{style:{padding:"12px 20px",color:"var(--text-secondary)"},children:t})]},r))})]})]}),e.jsx("section",{"data-aos":"fade-up",style:{marginBottom:"56px"},children:e.jsxs("div",{className:"exercise-box",style:{background:"var(--bg-light-gray)",border:"1px solid var(--border-light)",borderRadius:"var(--radius-lg)",padding:"28px 32px"},children:[e.jsx("h3",{style:{fontSize:"20px",fontWeight:700,color:"var(--text-primary)",marginBottom:"16px"},children:"연습 문제"}),e.jsxs("ol",{style:{color:"var(--text-secondary)",lineHeight:2,paddingLeft:"20px",margin:0},children:[e.jsx("li",{children:"높이가 3인 포화 이진 트리의 노드 수와 리프 노드 수를 구하세요."}),e.jsx("li",{children:"완전 이진 트리에 노드가 10개 있을 때, 리프 노드의 개수를 구하세요."}),e.jsx("li",{children:"이진 트리를 좌우 반전(Mirror)하는 함수를 구현하세요."}),e.jsx("li",{children:"두 이진 트리가 동일한 구조와 값을 가지는지 확인하는 함수를 작성하세요."}),e.jsx("li",{children:"이진 트리에서 특정 값을 가진 노드의 깊이를 반환하는 함수를 구현하세요."})]})]})}),e.jsxs("nav",{className:"lesson-nav","data-aos":"fade-up",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px 0",borderTop:"1px solid var(--border-light)"},children:[e.jsxs(n,{to:"/nonlinear/tree",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 24px",background:"var(--bg-light-gray)",color:"var(--text-primary)",borderRadius:"var(--radius-md)",textDecoration:"none",fontWeight:600,fontSize:"15px",transition:"var(--transition-base)"},children:[e.jsx("span",{style:{fontSize:"18px"},children:"←"}),"이전: 트리"]}),e.jsxs(n,{to:"/nonlinear/bst",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 24px",background:"var(--primary-blue)",color:"#fff",borderRadius:"var(--radius-md)",textDecoration:"none",fontWeight:600,fontSize:"15px",transition:"var(--transition-base)"},children:["다음: 이진 탐색 트리",e.jsx("span",{style:{fontSize:"18px"},children:"→"})]})]})]})})})]}));export{p as default};
