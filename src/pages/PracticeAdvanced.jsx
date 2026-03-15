import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const questions = [
  {
    id: 1,
    q: '트라이(Trie)에서 길이가 m인 문자열을 검색하는 시간 복잡도는?',
    opts: ['A. O(1)', 'B. O(m)', 'C. O(n)', 'D. O(n log n)'],
    ans: 'B',
    exp: '트라이에서 검색은 문자열의 각 문자를 따라가므로, 문자열 길이 m에 비례하는 O(m)입니다. 저장된 전체 문자열 수 n과 무관합니다.',
  },
  {
    id: 2,
    q: '세그먼트 트리에서 구간 합 쿼리의 시간 복잡도는?',
    opts: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(n log n)'],
    ans: 'B',
    exp: '세그먼트 트리는 구간 정보를 트리 노드에 저장하므로, 구간 합/최솟값/최댓값 등의 쿼리를 O(log n)에 처리할 수 있습니다.',
  },
  {
    id: 3,
    q: '유니온 파인드(Union-Find)에서 경로 압축(Path Compression)과 랭크 기반 합치기를 모두 적용했을 때, Find 연산의 분할 상환 시간 복잡도는?',
    opts: ['A. O(1)', 'B. O(log n)', 'C. O(α(n))', 'D. O(n)'],
    ans: 'C',
    exp: 'α(n)은 아커만 함수의 역함수로, 실질적으로 상수에 가깝습니다. 경로 압축과 랭크 기반 합치기를 함께 사용하면 거의 O(1)에 가까운 성능을 냅니다.',
  },
  {
    id: 4,
    q: 'AVL 트리에서 삽입 후 균형이 깨졌을 때 수행하는 연산은?',
    opts: ['A. 리해싱(Rehashing)', 'B. 회전(Rotation)', 'C. 분할(Split)', 'D. 병합(Merge)'],
    ans: 'B',
    exp: 'AVL 트리는 삽입/삭제 후 균형 인수(Balance Factor)가 ±1을 넘으면 단일 회전 또는 이중 회전을 수행하여 균형을 복원합니다.',
  },
  {
    id: 5,
    q: 'B-트리(B-Tree)에 대한 설명으로 올바르지 않은 것은?',
    opts: ['A. 모든 리프 노드의 깊이가 같다', 'B. 디스크 기반 저장에 최적화되어 있다', 'C. 이진 트리의 일종이다', 'D. 하나의 노드에 여러 키를 저장할 수 있다'],
    ans: 'C',
    exp: 'B-트리는 이진 트리가 아니라 다진 트리(Multi-way Tree)입니다. 하나의 노드에 여러 키를 저장하고, 자식이 2개 이상일 수 있어 디스크 I/O를 최소화합니다.',
  },
  {
    id: 6,
    q: '다익스트라(Dijkstra) 최단 경로 알고리즘에서 우선순위 큐(최소 힙)를 사용할 때의 시간 복잡도는? (V: 정점, E: 간선)',
    opts: ['A. O(V^2)', 'B. O(V + E)', 'C. O((V + E) log V)', 'D. O(V * E)'],
    ans: 'C',
    exp: '최소 힙을 사용하면 각 정점의 추출에 O(log V), 각 간선의 완화(relaxation)에 O(log V)가 걸려 총 O((V + E) log V)입니다.',
  },
  {
    id: 7,
    q: '위상 정렬(Topological Sort)이 가능한 그래프의 조건은?',
    opts: ['A. 무방향 그래프', 'B. 사이클이 있는 방향 그래프', 'C. DAG(방향 비순환 그래프)', 'D. 완전 그래프'],
    ans: 'C',
    exp: '위상 정렬은 DAG(Directed Acyclic Graph)에서만 가능합니다. 사이클이 존재하면 선후 관계를 정의할 수 없으므로 위상 정렬이 불가능합니다.',
  },
  {
    id: 8,
    q: '분할 상환 분석(Amortized Analysis)에서 동적 배열의 append 연산의 분할 상환 시간 복잡도는?',
    opts: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(n^2)'],
    ans: 'A',
    exp: '동적 배열은 가끔 O(n) 크기의 재할당이 발생하지만, n번의 연산에 걸쳐 비용을 분배하면 각 연산의 분할 상환 비용은 O(1)입니다.',
  },
  {
    id: 9,
    q: 'DP(동적 프로그래밍)와 세그먼트 트리를 결합하여 해결할 수 있는 문제 유형은?',
    opts: ['A. 최장 증가 부분 수열(LIS)을 O(n log n)에 구하기', 'B. 피보나치 수 구하기', 'C. 문자열 뒤집기', 'D. 단순 배열 정렬'],
    ans: 'A',
    exp: 'LIS를 O(n log n)에 구할 때 이진 탐색 또는 세그먼트 트리를 활용합니다. DP 테이블의 구간 최댓값을 세그먼트 트리로 빠르게 조회하여 효율을 높입니다.',
  },
  {
    id: 10,
    q: '해시 테이블에서 Cuckoo Hashing의 특징으로 올바른 것은?',
    opts: ['A. 체이닝 방식의 일종이다', 'B. 최악의 경우 탐색이 O(1)이다', 'C. 해시 함수를 하나만 사용한다', 'D. 삽입이 항상 O(1)이다'],
    ans: 'B',
    exp: 'Cuckoo Hashing은 두 개의 해시 함수와 두 개의 테이블을 사용하여, 탐색 시 최대 2번의 조회로 결과를 얻으므로 최악의 경우에도 O(1) 탐색을 보장합니다.',
  },
];

const PracticeAdvanced = () => {
  useAOS();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId, val) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => { setAnswers({}); setSubmitted(false); };

  const getScore = () => questions.filter(q => answers[q.id] === q.ans).length;

  return (
    <>
      <SEOHead
        title="고급 문제 | 자료구조 학습"
        description="트라이, 세그먼트 트리, 유니온 파인드, AVL, B-트리 등 고급 자료구조 문제 10선으로 심화 실력을 점검합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>고급 문제</h1>
          <p>트라이, 세그먼트 트리, 유니온 파인드, 고급 트리/그래프 알고리즘의 심화 개념을 점검하는 10문제</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {submitted && (
              <div className="callout-box" data-aos="fade-up">
                <h3>채점 결과</h3>
                <p>
                  <strong>{getScore()}</strong> / {questions.length} 문제 정답
                  ({Math.round((getScore() / questions.length) * 100)}점)
                </p>
              </div>
            )}

            {questions.map((q, idx) => {
              const selected = answers[q.id];
              const isCorrect = selected === q.ans;

              return (
                <div key={q.id} className="exercise-box" data-aos="fade-up" data-aos-delay={idx * 50}>
                  <h3>문제 {q.id}.</h3>
                  <p><strong>{q.q}</strong></p>
                  <div className="quiz-options-area">
                    {q.opts.map((opt) => {
                      const val = opt.charAt(0);
                      const isSelected = selected === val;
                      let cls = 'quiz-option';

                      if (submitted) {
                        cls += ' quiz-option--disabled';
                        if (val === q.ans) {
                          cls += ' quiz-option--correct';
                        } else if (isSelected && !isCorrect) {
                          cls += ' quiz-option--wrong';
                        }
                      } else if (isSelected) {
                        cls += ' quiz-option--selected';
                      }

                      return (
                        <label
                          key={val}
                          className={cls}
                          onClick={() => handleSelect(q.id, val)}
                        >
                          <input
                            type="radio"
                            name={`q${q.id}`}
                            checked={isSelected}
                            onChange={() => handleSelect(q.id, val)}
                            className="quiz-radio"
                            disabled={submitted}
                          />
                          {opt}
                        </label>
                      );
                    })}
                  </div>
                  {submitted && (
                    <div className={`quiz-explanation ${isCorrect ? 'quiz-explanation--correct' : 'quiz-explanation--wrong'}`}>
                      <strong>{isCorrect ? '정답!' : `오답 (정답: ${q.ans})`}</strong>
                      <br />
                      {q.exp}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="quiz-submit-area" data-aos="fade-up">
              {!submitted ? (
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length < questions.length}
                >
                  제출하기 ({Object.keys(answers).length}/{questions.length})
                </button>
              ) : (
                <button className="btn btn-secondary" onClick={handleReset}>
                  다시 풀기
                </button>
              )}
            </div>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/practice/intermediate" className="lesson-nav-btn prev">&larr; 중급 문제</Link>
              <Link to="/practice/real" className="lesson-nav-btn next">실전 문제 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAdvanced;
