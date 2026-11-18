<!--
  @component
  Previous/next pager for a list sliced into pages of `perPage` items.
  `page` is zero-based and bindable; the "a – b of n" range is announced.
-->
<script lang="ts">
  import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  let {
    page = $bindable(0),
    perPage,
    total,
    color = "var(--color-text)",
  }: {
    page?: number;
    perPage: number;
    total: number;
    color?: string;
  } = $props();

  let totalPages = $derived(Math.max(1, Math.ceil(total / perPage)));
  let first = $derived(total === 0 ? 0 : page * perPage + 1);
  let last = $derived(Math.min((page + 1) * perPage, total));
</script>

<nav
  class="pagination"
  aria-label="Pagination"
  style:--pager-color={color}
>
  <button
    type="button"
    onclick={() => (page -= 1)}
    disabled={page === 0}
    aria-label="Previous page"
  >
    <Fa icon={faArrowLeft} />
  </button>
  <p role="status">{first} – {last} of {total}</p>
  <button
    type="button"
    onclick={() => (page += 1)}
    disabled={page >= totalPages - 1}
    aria-label="Next page"
  >
    <Fa icon={faArrowRight} />
  </button>
</nav>

<style>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination p {
    margin: 0 1rem;
  }

  button {
    transition:
      transform var(--transition),
      box-shadow var(--transition);
    cursor: pointer;
    border: 1px solid var(--pager-color);
    border-radius: 0.25rem;
    background-color: var(--pager-color);
    padding: 0.75rem 2rem;
    color: var(--color-bg);
    font-size: 1rem;
  }

  button:not([disabled]):hover {
    box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);

    @media (prefers-reduced-motion: no-preference) {
      transform: scale(1.05);
    }
  }

  button:active {
    transform: scale(1);
    box-shadow: inset 5px 5px 10px -5px rgba(0, 0, 0, 0.5);
  }

  button:disabled {
    cursor: not-allowed;
    border-color: var(--color-surface);
    background-color: var(--color-surface);
  }
</style>
