<template>
    <div>
        <!-- ================> blog section start here <================== -->
        <div class="blog padding-top padding-bottom">
            <div class="container">
                <div class="blog__wrapper">
                    <div class="row g-4">
                        <div v-for="(item, index) in blogList" :key="index" class="col-lg-4 col-md-6">
                            <BlogItem :title="item.title" :author="item.author" :image="item.image" />
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <nav aria-label="Blog Pagination">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <span class="page-link"><i class="fa-solid fa-angle-left"></i></span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active" aria-current="page">
                                    <span class="page-link">2</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#"><i class="fa-solid fa-angle-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- ================> blog section end here <================== -->
    </div>
</template>

<script>
import BlogItem from '@/components/partials/blog/BlogItem.vue'

export default {
    components: { BlogItem },
    props: ['blogList'],
};
</script>