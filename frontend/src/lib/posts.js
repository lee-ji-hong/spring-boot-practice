import api from "./api";

/**
 * 게시글 목록 (페이지네이션)
 * @param {number} page  0-base 페이지
 * @param {number} size  페이지 사이즈
 */
export async function fetchPosts({ page = 0, size = 10 } = {}) {
  const { data } = await api.get("/post", { params: { page, size } });
  return data; // 서버가 Page<Post> 구조라면 data.content, data.totalElements 등 포함
}

/**
 * 게시글 단건
 */
export async function fetchPost(id) {
  const { data } = await api.get(`/post/${id}`);
  return data;
}

/**
 * 게시글 생성
 */
export async function createPost(payload) {
  const { data } = await api.post("/post", payload);
  return data;
}

/**
 * 게시글 수정
 */
export async function updatePost(id, payload) {
  const { data } = await api.put(`/post/${id}`, payload);
  return data;
}

/**
 * 게시글 삭제
 */
export async function deletePost(id) {
  const { data } = await api.delete(`/post/${id}`);
  return data;
}
