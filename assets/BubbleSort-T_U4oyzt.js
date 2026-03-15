import{j as s,L as e}from"./index-DQ3FoKqk.js";import{S as r}from"./SEOHead-ZmeIlSyn.js";import{u as a}from"./useAOS-CRA2ZcoE.js";const i=()=>(a(),s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"버블 정렬 | 자료구조 학습",description:"버블 정렬의 개념, 동작 과정, 시간 복잡도 O(n²), 최적화 기법, Python 구현을 학습합니다."}),s.jsx("div",{className:"page-header","data-aos":"fade-down",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"버블 정렬"}),s.jsx("p",{className:"page-header-desc",children:"인접한 두 요소를 비교하여 정렬하는 가장 직관적인 알고리즘입니다. 이해하기 쉽지만 성능은 O(n²)으로, 정렬 알고리즘 학습의 출발점입니다."})]})}),s.jsx("div",{className:"lesson-content",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-body",children:[s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"버블 정렬의 개념"}),s.jsx("p",{children:'버블 정렬(Bubble Sort)은 배열의 인접한 두 요소를 반복적으로 비교하고, 잘못된 순서이면 교환하는 정렬 알고리즘입니다. 큰 값이 배열의 끝으로 "거품(bubble)"처럼 떠오르는 모습에서 이름이 유래했습니다.'}),s.jsx("p",{children:"가장 단순한 정렬 알고리즘 중 하나로, 구현이 매우 쉽지만 효율성은 떨어집니다. 주로 교육 목적으로 사용되며, 실무에서는 거의 사용되지 않습니다."})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"동작 과정"}),s.jsx("p",{children:"배열 [5, 3, 8, 4, 2]를 오름차순으로 정렬하는 과정을 살펴봅시다."}),s.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[s.jsx("div",{className:"code-header",children:"버블 정렬 동작 과정"}),s.jsx("pre",{children:s.jsx("code",{children:`초기 배열: [5, 3, 8, 4, 2]

[1회전] - 가장 큰 값 8이 맨 뒤로 이동
  (5, 3) → 교환 → [3, 5, 8, 4, 2]
  (5, 8) → 유지 → [3, 5, 8, 4, 2]
  (8, 4) → 교환 → [3, 5, 4, 8, 2]
  (8, 2) → 교환 → [3, 5, 4, 2, 8]  ✓ 8 확정

[2회전] - 두 번째로 큰 값 5가 뒤에서 두 번째로
  (3, 5) → 유지 → [3, 5, 4, 2, 8]
  (5, 4) → 교환 → [3, 4, 5, 2, 8]
  (5, 2) → 교환 → [3, 4, 2, 5, 8]  ✓ 5 확정

[3회전]
  (3, 4) → 유지 → [3, 4, 2, 5, 8]
  (4, 2) → 교환 → [3, 2, 4, 5, 8]  ✓ 4 확정

[4회전]
  (3, 2) → 교환 → [2, 3, 4, 5, 8]  ✓ 3 확정

결과: [2, 3, 4, 5, 8]`})})]}),s.jsxs("div",{className:"callout-box","data-aos":"fade-up",children:[s.jsx("strong",{children:"핵심 관찰:"})," 매 회전(pass)마다 아직 정렬되지 않은 부분에서 가장 큰 값이 올바른 위치에 확정됩니다. n개의 요소를 정렬하려면 최대 n-1번의 회전이 필요합니다."]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsxs("h2",{children:["시간 복잡도 O(n",s.jsx("sup",{children:"2"}),")"]}),s.jsxs("table",{className:"lesson-table","data-aos":"fade-up",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"경우"}),s.jsx("th",{children:"시간 복잡도"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"최선 (Best)"}),s.jsx("td",{children:"O(n)"}),s.jsx("td",{children:"이미 정렬된 경우 (최적화 적용 시)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"평균 (Average)"}),s.jsxs("td",{children:["O(n",s.jsx("sup",{children:"2"}),")"]}),s.jsx("td",{children:"무작위 배열"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"최악 (Worst)"}),s.jsxs("td",{children:["O(n",s.jsx("sup",{children:"2"}),")"]}),s.jsx("td",{children:"역순으로 정렬된 경우"})]})]})]}),s.jsxs("table",{className:"lesson-table","data-aos":"fade-up",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"특성"}),s.jsx("th",{children:"값"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"공간 복잡도"}),s.jsx("td",{children:"O(1) - 제자리 정렬 (In-place)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"안정 정렬"}),s.jsx("td",{children:"Yes - 같은 값의 상대적 순서 유지"})]})]})]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"최적화 (이미 정렬된 경우)"}),s.jsx("p",{children:"기본 버블 정렬은 배열이 이미 정렬되어 있어도 모든 비교를 수행합니다. 한 회전에서 교환이 한 번도 발생하지 않으면 이미 정렬이 완료된 것이므로 조기 종료할 수 있습니다."}),s.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[s.jsx("div",{className:"code-header",children:"최적화된 버블 정렬"}),s.jsx("pre",{children:s.jsx("code",{children:`def bubble_sort_optimized(arr):
    """최적화된 버블 정렬: 교환이 없으면 조기 종료"""
    n = len(arr)
    for i in range(n - 1):
        swapped = False  # 교환 발생 여부 추적
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break  # 교환이 없으면 이미 정렬 완료
    return arr

# 이미 정렬된 배열: 1회전만에 종료 → O(n)
sorted_arr = [1, 2, 3, 4, 5]
print(bubble_sort_optimized(sorted_arr))  # [1, 2, 3, 4, 5]`})})]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"구현"}),s.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[s.jsx("div",{className:"code-header",children:"기본 버블 정렬 구현"}),s.jsx("pre",{children:s.jsx("code",{children:`def bubble_sort(arr):
    """기본 버블 정렬"""
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 내림차순 정렬
def bubble_sort_desc(arr):
    """내림차순 버블 정렬"""
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] < arr[j + 1]:  # 부등호 방향만 반대
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 테스트
data = [64, 34, 25, 12, 22, 11, 90]
print("오름차순:", bubble_sort(data[:]))
# [11, 12, 22, 25, 34, 64, 90]
print("내림차순:", bubble_sort_desc(data[:]))
# [90, 64, 34, 25, 22, 12, 11]

# 과정 출력 버전
def bubble_sort_verbose(arr):
    """각 단계를 출력하는 버블 정렬"""
    n = len(arr)
    arr = arr[:]
    for i in range(n - 1):
        print(f"[{i+1}회전]")
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                print(f"  교환: {arr}")
        print(f"  → 결과: {arr}")
    return arr

bubble_sort_verbose([5, 3, 8, 4, 2])`})})]})]}),s.jsxs("div",{className:"exercise-box","data-aos":"fade-up",children:[s.jsx("h3",{children:"연습 문제"}),s.jsxs("ol",{children:[s.jsx("li",{children:"배열 [6, 1, 9, 3, 7]을 버블 정렬로 정렬하는 각 회전의 과정을 손으로 추적하세요."}),s.jsx("li",{children:"최적화된 버블 정렬에서 [1, 2, 3, 5, 4] 배열을 정렬할 때 몇 번의 회전이 필요한지 구하세요."}),s.jsx("li",{children:"버블 정렬을 이용하여 문자열 리스트를 사전순으로 정렬하는 함수를 작성하세요."})]})]})]})})}),s.jsxs("nav",{className:"lesson-nav","data-aos":"fade-up",children:[s.jsxs(e,{to:"/hash/hash-map",className:"lesson-nav-prev",children:[s.jsx("span",{className:"lesson-nav-label",children:"이전"}),s.jsx("span",{className:"lesson-nav-title",children:"해시 맵 활용"})]}),s.jsxs(e,{to:"/algorithm/selection-sort",className:"lesson-nav-next",children:[s.jsx("span",{className:"lesson-nav-label",children:"다음"}),s.jsx("span",{className:"lesson-nav-title",children:"선택 정렬"})]})]})]}));export{i as default};
